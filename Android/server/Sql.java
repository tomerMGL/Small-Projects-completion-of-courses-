package Server;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class Sql{
	
	Statement statement;
	Statement statment1;
	ArrayList<String> requestsArrayList = new ArrayList<String>();
	
	enum monthIntToString{
	January,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	November,
	December
	}
	
	public void openConnection() {
		try {
			Connection con = null;
			String name = "jdbc:mysql://localhost:3306/androidfinal" , dBuser="root" , DBpassword="123456";
			con=(Connection)DriverManager.getConnection(name , dBuser , DBpassword);
			
			if(con!=null) {
				System.out.println("Database connected!");
			}
		statement = con.createStatement();
		statment1 = con.createStatement();
	
		}catch(Exception e) {
			System.out.println(e);
		}
	
		
}
	
	
	public String detailsOfTenantPayment(String apartmentNumber) throws SQLException {
		int month = 1;
		String answer = apartmentNumber+" ";
		String ID = null;
		ResultSet resultSet;
		String query = "SELECT ID FROM androidfinal.tenant WHERE ApartmentNumber = '"+apartmentNumber+"'" ;
		if(statement.execute(query)) {
			 resultSet = statement.executeQuery(query);

			 while(resultSet.next()) {
				if(resultSet.getString(1)!=null) {
					ID = resultSet.getString(1);
				}
			}
			
			
			String query_1 = "SELECT * FROM androidfinal.rentmonth WHERE ID = '"+ID+"'";
			if(statement.execute(query_1)) {
				 resultSet = statement.executeQuery(query_1);
				 while(resultSet.next()) {
					 for(int i=1;i<=12;i++) {
						 if(resultSet.getBoolean(i+1))
							 answer+=String.valueOf(month) +" ";
						 month++;
					 }
				 }
			}
			
		}
		
		return answer;
		
	}
	
	public boolean loginManager(String name , String password) throws SQLException {
		String query = "SELECT * FROM androidfinal.manager WHERE userName = '"+name+"' and password = '"+password+"'";
		ResultSet resultSet;
		if(statement.execute(query)) {
			 resultSet = statement.executeQuery(query);
		if(resultSet.next())
			return true;
			
		
		
	}
		return false;
}	
	
	
	public boolean loginTenant(String name , String password) throws SQLException {
		String query = "SELECT * FROM androidfinal.tenant WHERE userName = '"+name+"' and password = '"+password+"'";
		ResultSet resultSet;
		if(statement.execute(query)) {
			 resultSet = statement.executeQuery(query);
		if(resultSet.next())
			return true;
			
		
		
	}
		return false;
}
	
	
	public boolean addTenantPayment(String ID , String month) throws SQLException {
		String queryString = "INSERT INTO `androidfinal`.`rentmonth` (`ID`, `"+month+"`) VALUES ('"+ID+"', '1')";
		statement.executeUpdate(queryString);
		return false;
	}
	
	
	public int checkRentById(String id) throws SQLException {
		int answer =0;
		String query = "SELECT Rent FROM androidfinal.tenant WHERE id = '"+id+"'";
		ResultSet resultSet;
		if(statement.execute(query)) {
			 resultSet = statement.executeQuery(query);
		while(resultSet.next()) {
			answer = Integer.parseInt(resultSet.getString(1)) ;
		}
	}
		
		return answer;
}
	
	public int fullRentPerMonth(String month) throws SQLException {
		int answer = 0;
		month = monthIntToString.values()[Integer.parseInt(month)-1].toString();
		String query = "SELECT ID,"+month+" FROM androidfinal.rentmonth";
		ResultSet resultSet;
		if(statment1.execute(query)) {
			 resultSet = statment1.executeQuery(query);
			 
		while(resultSet.next()) {
			
			if(resultSet.getInt(2) == 1) {
				
				answer += checkRentById(resultSet.getString(1));
			}
		}
	}
		return answer;
}
}
