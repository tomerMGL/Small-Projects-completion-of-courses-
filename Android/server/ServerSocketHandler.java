package Server;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;
import java.sql.SQLException;

public class ServerSocketHandler extends Thread {

	
	Socket new_client;
	String client_request = null;
	Sql database;
	
	public ServerSocketHandler(Socket client , Sql db) {
		new_client = client;
		database = db;
	}
	
	
	public void run() {
		
		
		try {
			BufferedReader inFromClient = new BufferedReader(new InputStreamReader(new_client.getInputStream()));

			while(true) {

				client_request = inFromClient.readLine(); //get the request from the client
				if(client_request!=null) {
					database.requestsArrayList.add(client_request); // add the request to the array
			}
				
			}
			
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	

}
