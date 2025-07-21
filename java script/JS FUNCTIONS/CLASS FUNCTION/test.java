class Test{
    Test(){
        System.out.println("Constuctor is special method");
    }
    public static void main(String[] args) {
        new Test();
        new Test();
        new Test();
    }
}