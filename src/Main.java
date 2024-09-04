import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Por favor, digite um número. Irei mostrar se ele está ou não na sequência de fibonacci");
        int numeroParaEncontrar = scanner.nextInt();

        int num1 = 0, num2 = 1;

        System.out.print("Sequência de Fibonacci: ");

        for (int i = 1; i <= numeroParaEncontrar; ++i) {
            System.out.println(num1 + " ");

            int soma = num1 + num2;
            num1 = num2;
            num2 = soma;

            if (num1 == numeroParaEncontrar) {
                System.out.println(num1);
                System.out.println("Sim, o número " + numeroParaEncontrar + " está na sequência!");
                break;
            } else if (num1 > numeroParaEncontrar){
                System.out.println(num1);
                System.out.println("Não, o número " + numeroParaEncontrar + " não está na sequência!");
                break;
            }
        }
    }
}