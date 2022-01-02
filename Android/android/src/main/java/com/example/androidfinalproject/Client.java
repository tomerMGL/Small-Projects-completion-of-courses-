package com.example.androidfinalproject;

import android.content.Context;
import android.widget.Toast;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.logging.Handler;
import java.util.logging.LogRecord;

public class Client implements Runnable{

    Socket s ;
    Context ctx;

    Client(Context context){
        ctx = context;
    }
    @Override
    public void run() {
        try {
            s= new Socket("192.168.1.33" , 7500);

           // Toast.makeText(ctx , "hey" , Toast.LENGTH_LONG).show();

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
