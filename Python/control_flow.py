def is_leap_year(year):
    if year % 4 == 0 and year % 100 != 0:
        print("It is a perfect Leap year")
    elif year % 400 == 0:
        print("It is a Century Leap year")
    elif year % 100 == 0:
        print("It is not a Leap year")
    else:
        print("It is not a Leap year")

print("Enter a year: ")
year=int(input())
is_leap_year(year)
