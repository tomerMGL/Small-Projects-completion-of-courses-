package com.example.androidfinalproject;

import android.app.Activity;
import android.content.Context;
import android.content.pm.ActivityInfo;
import android.os.AsyncTask;
import android.widget.Toast;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

import static java.security.AccessController.getContext;

public class Sockets_client extends AsyncTask<Void,Void,Void>{

    Socket s;
    PrintWriter pw;
    Context context;
    Sockets_client_sender client_sender;

    private connectionTread taskCompleted;
    public Sockets_client(connectionTread con ){
        taskCompleted = con;

    }

    @Override
    protected Void doInBackground(Void... voids) {
        try {
            taskCompleted.onTaskCompleted("Hello Client");

            s= new Socket("192.168.1.33" , 7500);



            //client_sender = new Sockets_client_sender(taskCompleted , s);
           // client_sender.execute();

        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

    protected void onPostExecute(Void... voids) {
        taskCompleted.onTaskCompleted("123");
    }


}
