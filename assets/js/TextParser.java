import java.io.*;

public class TextParser {

    public static void main (String[] args) throws IOException {
        String[] movieList = parse("action.txt");
        System.out.print("[");
        for (int i = 0; i < movieList.length; i++) {
            System.out.print("\"" + movieList[i] + "\"" + ", ");
        }

        System.out.print("]");
    }

    public static String[] parse(String fileName) throws IOException {
        String[] movieList = new String[100];
        FileInputStream fstream = new FileInputStream(fileName);
        BufferedReader br = new BufferedReader(new InputStreamReader(fstream));
        String currentLine = br.readLine();
        // System.out.println(currentLine.substring(11, currentLine.indexOf('(')));
        int index = 0;
        while (currentLine != null) {
            movieList[index] = currentLine;
            index++;
            //System.out.println(currentValue);
            currentLine = br.readLine();
        }

        fstream.close();
        return movieList;
    }
}