#include <iostream>

using namespace std;

class Point
{
public:
    int x_co;
    int y_co;

    Point()
    {
        x_co = y_co = 0;
    }

    Point(int x, int y_co) : x_co(x) // initialization list
    {
        this->y_co = y_co; // because both instance variable and local variable have same name
        x_co = x;
    }
};

int main()
{
    Point p1;
    Point p2(10, 20);
    cout << "Point P1 = (" << p1.x_co << ", " << p1.y_co << ")" << endl;
    std::cout << "Point P2 = (" << p2.x_co << ", " << p2.y_co << ")" << endl;
    return 0;
}