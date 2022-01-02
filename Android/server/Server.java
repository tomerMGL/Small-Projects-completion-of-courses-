package Server;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;


public class Server {
	
	
	public static void main(String argv[]) throws Exception 
		{ 
			ServerSocket server_socket = null;
			Sql dataBase = new Sql();
			dataBase.openConnection();
			


			try {
		
				server_socket=new ServerSocket(7500); // open server socket
				
			}
			catch(IOException e) {
				System.out.println(e);
			}
			
			
			while(true) {
				 Socket new_client = null;

				    try {
					new_client = server_socket.accept();
					
					
					
					
				    } catch(IOException e) {
					System.out.println(e);
					continue;
				    }	
				   System.out.println(new_client.toString()+" is a new client");
				   
				   new ServerSocketHandler(new_client , dataBase).start(); // listener thread
				   new ServerSocketHandlerSend(new_client , dataBase).start(); // sender thread

			}
		}
}
