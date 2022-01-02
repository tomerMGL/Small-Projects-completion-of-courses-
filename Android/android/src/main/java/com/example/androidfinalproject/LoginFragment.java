package com.example.androidfinalproject;

import android.net.sip.SipSession;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.androidfinalproject.R;

import org.w3c.dom.Text;

public class LoginFragment extends Fragment {
     TextView loginText;


    public LoginFragment() {

    }



    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
;



    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_login, container, false);
        loginText = (TextView) view.findViewById(R.id.loginTitle);
        Button tenantButton = (Button)view.findViewById(R.id.tenant);


        Button managerButton = (Button)view.findViewById(R.id.manager);
        Button passChange = (Button)view.findViewById(R.id.changePass);


        passChange.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                loginText.setText("סבבי");
            }
        });



        return view;
    }



}