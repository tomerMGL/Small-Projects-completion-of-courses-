package com.example.androidfinalproject;

import android.os.AsyncTask;
import android.os.Bundle;

import androidx.fragment.app.Fragment;


import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.example.androidfinalproject.MainActivity;
import com.example.androidfinalproject.R;

import java.net.Socket;

public class FirstFragment extends Fragment implements fragments_interface {

    public FirstFragment(){

    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_first, container, false);
    }



    @Override
    public void load_fragments(View view) {
    }
}