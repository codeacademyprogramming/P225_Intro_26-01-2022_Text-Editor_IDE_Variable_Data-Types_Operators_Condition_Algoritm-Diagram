using System;

namespace P225FirstVisual
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World! P225");
            //Console.Read();

            //byte age = 30;
            //sbyte temp = 127;
            //char letter = 'a';
            //string text = "Hello";

            //Console.WriteLine(5 <= 7 && 2 == 2 && 5 >= 5 && 9 == 3);

            //if ("Hello" == "Hell" && (5 >= 7 || 2 == 2 || 5 >= 7 || 9 != 3))
            //{
            //    Console.WriteLine("sertler Tplusun Yekun Neticesi True-dur");
            //}
            //else if ("Hello" == "Hello" && (5 >= 7 || 2 == 2 || 5 >= 7 || 9 != 3))
            //{
            //    Console.WriteLine("sertler else if Tplusun Yekun Neticesi True-dur");
            //}
            //else
            //{
            //    Console.WriteLine("sertler Tplusun Yekun Neticesi False-dur");
            //}

            int a = 7;

            if (a == 5)
            {
                Console.WriteLine("Reqem Besdir");
            }
            else if(a == 7)
            {
                Console.WriteLine("Reqem Yeddidir");
            }
            else if (a == 8)
            {
                Console.WriteLine("Reqem Sekkizdir");
            }
            else if (a == 9)
            {
                Console.WriteLine("Reqem Doqquzdur");
            }
            else if (a == 10)
            {
                Console.WriteLine("Reqem Ondur");
            }
            else if (a == 11)
            {
                Console.WriteLine("Reqem Onbirdir");
            }

            switch (a)
            {
                case 5:
                    Console.WriteLine("Reqem Besdir");
                    break;
                case 6:
                    Console.WriteLine("Reqem Yeddidir");
                    break;
                case 7:
                    Console.WriteLine("Reqem Yeddidir");
                    break;
                case 8:
                    Console.WriteLine("Reqem Sekkizdir");
                    break;
                default:
                    break;
            }
        }
    }
}
