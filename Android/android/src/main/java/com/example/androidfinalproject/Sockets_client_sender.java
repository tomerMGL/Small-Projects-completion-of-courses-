package com.example.androidfinalproject;

import android.content.Context;
import android.os.AsyncTask;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.io.BufferedWriter;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public class Sockets_client_sender extends AsyncTask<Void,Void,Void> {
    Socket s;
    PrintWriter pw;
    Context context;
    DataOutputStream out;

    String ss = "123456789";
    private connectionTread taskCompleted;

    public Sockets_client_sender(connectionTread con , Socket s){
        taskCompleted = con;
        this.s = s;
    }

    public void sendMsg(String msg) throws IOException {
        out.writeBytes(msg+"\n");
    }

    @Override
    protected Void doInBackground(Void... voids) {


        try {
            pw = new PrintWriter(new BufferedWriter(new OutputStreamWriter(s.getOutputStream())));
            out = new DataOutputStream(s.getOutputStream());
            sendMsg("YESSSS");
            taskCompleted.onTaskCompleted(ss);







        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }





}
