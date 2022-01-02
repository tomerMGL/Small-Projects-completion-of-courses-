package Server;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;
import java.sql.SQLException;

public class ServerSocketHandlerSend extends Thread{
	
	Socket new_client;
	String client_sender=null;
	Sql database;
	DataOutputStream outToClient;
	public ServerSocketHandlerSend(Socket new_client ,Sql db) {
		
		this.new_client = new_client;
		database = db;
	}
	
	

	public void run(){
		try {
			outToClient = new DataOutputStream(new_client.getOutputStream());
		} catch (IOException e1) {
			e1.printStackTrace();
		}

		while(true) {
			try {
				Thread.sleep(1);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
			try {
				trySomething();   //check if have new request in the array, if yes send the answer to the client
			} catch (SQLException | IOException e1) {
				e1.printStackTrace();
			}
			
			
			
			if(client_sender!=null) {
				client_sender=null;
			}

				
		}

	}
	
	private void trySomething() throws SQLException, IOException {
		
		if(!database.requestsArrayList.isEmpty()) {
			client_sender=database.requestsArrayList.get(0);
			
			switch(client_sender) {
			case "detailsOfTenantPayment" :{
			outToClient.writeBytes(database.detailsOfTenantPayment("1")+"\n");
			} break;
			
			case "addTenantPayment" :{
			outToClient.writeBytes(database.fullRentPerMonth("1")+"\n");
			} break;
			
			case "fullRentPerMonth" :{
			outToClient.writeBytes(database.fullRentPerMonth("1")+"\n");
			} break;
			}
			database.requestsArrayList.remove(0);
		}

	}
	
	
}
