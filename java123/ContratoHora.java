package java123;

import java.util.Date;

public class ContratoHora {
    private Date data;
    private double valueHours;
    private int hour;

    public ContratoHora(Date h, Double x, int i) {
        this.data = h;
        this.valueHours = x;
        this.hour = i;
    }

    public String toString() {
        return ("data : " + this.data + "é isso ai");
    }
    public Double sadsdadadaddad(){
        return valueHours * hour;
    }



}
