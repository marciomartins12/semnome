public class ImportedProduct extends Product {
    private double customFree;

    public ImportedProduct(String n, double p, double x) {
        super(n, p);
        this.customFree = x;
    }
    @Override
    public double getPrice(){
        return super.getPrice() * customFree;
    }
}
