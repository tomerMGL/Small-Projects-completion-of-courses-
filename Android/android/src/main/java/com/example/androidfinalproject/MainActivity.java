package com.example.androidfinalproject;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.io.IOException;
import java.net.InetAddress;
import java.net.Socket;
import java.security.AccessControlContext;


public class MainActivity extends AppCompatActivity implements fragments_interface , connectionTread {

    LoginFragment loginFragment;
    private FragmentManager fragmentManager;
    private FragmentTransaction fragmentTransaction;
    Tenant frag = new Tenant();
    Socket s;
    Sockets_client client ;
    Client c;
    private connectionTread taskCompleted1;
    public MainActivity() throws IOException {
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        client = new Sockets_client(MainActivity.this);
        client.execute();



        loadFragments();

    }

    private void loadFragments(){
        fragmentManager = getSupportFragmentManager();
        fragmentTransaction = fragmentManager.beginTransaction();
        fragmentTransaction.add(R.id.load_fragment, new FirstFragment()).commit();

    }


    @Override
    public void load_fragments(View view){

        switch (view.getId()){
            case R.id.manager:{

                fragmentManager = getSupportFragmentManager();
                fragmentTransaction = fragmentManager.beginTransaction();
                fragmentTransaction.replace(R.id.load_fragment, new LoginFragment()).addToBackStack(null).commit();
            }break;

            case R.id.tenant:{
                fragmentManager = getSupportFragmentManager();
                fragmentTransaction = fragmentManager.beginTransaction();
                fragmentTransaction.replace(R.id.load_fragment, new LoginFragment()).addToBackStack(null).commit();
                }break;

            case R.id.Login:{
                EditText email = findViewById(R.id.emailEdit);
                EditText password = findViewById(R.id.passwordEdit);



                if(email.getText().toString().equals("tomer")){
                    fragmentManager = getSupportFragmentManager();
                    fragmentTransaction = fragmentManager.beginTransaction();
                    fragmentTransaction.replace(R.id.load_fragment, new Tenant()).addToBackStack(null).commit();
                }
                else
                    onTaskCompleted("hey");
            }
            break;
            default:{Toast.makeText(MainActivity.this,"invaild option!",Toast.LENGTH_SHORT).show();};break;
        }



    }



    @Override
    public void onTaskCompleted(String response) {
        Toast.makeText(MainActivity.this,response+"Hello",Toast.LENGTH_SHORT).show();
    }
}