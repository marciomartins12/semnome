public class Product {
    private String name;
    private double price;
    
    public Product(String n, double p){
        this.name = n;
        this.price = p;
    }


    public void getInf(){
        System.out.println("name : " + this.name + " price : " + getPrice());
    }
    public double getPrice(){
        return this.price;
    }

    public double priceProduct(){
        return this.price;
    }
}
