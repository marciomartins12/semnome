package java123456.application;

import java123456.entities.Acount;

public class Main{

    public static void main(String[] args) {
        Acount conta1 = new Acount(24, "koki", 2400.0, 10.0);
        try{
            conta1.deposit(10000.0);
            conta1.withdraw(0.00);
        }
        catch(ExceptionInInitializerError e){
            e.printStackTrace();
            System.out.println("erro value invlaid");
        }
        catch(Error e){
            System.out.println("erro erro");
            
        }
    }
}