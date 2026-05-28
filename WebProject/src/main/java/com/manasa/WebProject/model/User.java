package com.manasa.WebProject.model;

public class User {
    private String name;
    private String image;
    private String gender;
    private int id;
    public User(){

    }
    public User(String name,String image,String gender,int id){
        this.name = name;
        this.image = image;
        this.gender = gender;
        this.id = id;
    }
    public String getName(){
        return this.name;
    }
    public String getImage(){
        return this.image;
    }
     public String getGender(){
        return this.gender;
    }
     public int getId(){
        return this.id;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setImage(String image){
        this.image = image;
    }
    public void setGender(String gender){
        this.gender = gender;
    }
    public void setId(int id){
        this.id = id;
    }
}
