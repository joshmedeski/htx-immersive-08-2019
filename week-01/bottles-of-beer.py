import time

#Set Variables
bottles_of_beer = 99
on_the_wall = " on the wall"
take_one = "Take one down and pass it around, "

#While Loop containing song made out of above varibales
while bottles_of_beer > 1:
    bottles_phrase = f"{bottles_of_beer} bottles of beer"
    print(f"{bottles_phrase}{on_the_wall}, ")
    time.sleep(2.5) #delays for 2.5 secs
    print(bottles_phrase)
    time.sleep(1.75) #delays for 1.75 secs
    bottles_of_beer = bottles_of_beer -1
    print(take_one)
    time.sleep(2.5) #delays for 2.5 secs
    print(f"{bottles_of_beer} bottles of beer{on_the_wall}")
    time.sleep(1) #delays for 1 sec
    print("=================================================================")
    time.sleep(1) #delays for 1 sec
    #If statement for when we get to 1 bottle of beer
    if bottles_of_beer == 1:
        print(f"1 bottle of beer{on_the_wall},")
        time.sleep(2.5) #delays for 2.5 secs
        print("1 bottle of beer!")
        time.sleep(1.75) #delays for 1.75 secs
        bottles_of_beer = bottles_of_beer -1
        print("Take it down and pass it around,")
        time.sleep(2.5) #delays for 2.5 secs
        print(f"no more bottles of beer {on_the_wall}")
        time.sleep(1) #delays for 1 sec
        print("=================================================================")
        time.sleep(1) #delays for 1 sec
    #Elif statement for when we get to 0 bottles of beer
    elif bottles_of_beer == 0:
        break
#Closing lines of the song  
print(f"There is no more bottles of beer{on_the_wall},")
time.sleep(4) #delays for 4 secs  
print("no more bottles of beer.")
time.sleep(4) #delays for 4 secs     
print("Go to the store and buy some more,")
time.sleep(4) #delays for 4 secs  
print("99 bottles of beer on the wall!")

    
