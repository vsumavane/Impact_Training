#Match Case
input=int(input("Enter a number: "))

match input :
    case 1:
        print("You entered one")
    case 2:
        print("You entered two")
    case 3:
        print("You entered three")
    case _:
        print("You entered something else")