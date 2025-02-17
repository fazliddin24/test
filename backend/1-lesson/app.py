# a = int(input("1-sonni kiriting: "))
# b = int(input("2-sonni kiriting: "))
# amal = input("Amalni kiriting: ")
# if amal == "+":
#     print(f"Natija: {a + b}")
# elif amal == "-":
#     print(f"Natija: {a - b}")
# elif amal == "*":
#     print(f"Natija: {a * b}")
# elif amal == "/":
#     if b != 0:
#         print(f"Natija: {a / b}")
#     else:
#         print("Xatolik: Nolga bo'lish mumkin emas!")
# else:
#     print("Noto'g'ri amal kiritildi!")


# name = 'asdasf'
# print(name.upper())

# name = 'FSFDgasa'
# print(name.lower())

# name = 'safasfaf'
# print(name.capitalize())

# name = 'fdsdfsadf'
# print(name[3:5] + name[:3])

# list_numbers = [12, 4, 32, 44, 23, 4]

# list_numbers.append(32) Listni ichiga yangi element qo'shish
# list_numbers.pop() Listni ichidagi oxirgi elementni o'chirib tashlash
# list_numbers.clear() Listdagi barcha elementlarni o'chirib tashlash
# list_numbers.insert(0, 6) Listga index orqali element qo'shish
# list_numbers.remove(23) remove(element nomi) orqali o'chirish
# list_numbers.sort() Listdagi elementlarni tartiblash (alfavit va son bo'yicha)
# print(list_numbers.count(4)) Listdagi bir xil elementlarni sanab beradi
# print(list_numbers.index(44)) Listdagi elementning indeksini topib beradi
# list_numbers.reverse() Listdagi elementlarni teskari tartibga keltirish
# del list_numbers[2] Listadagi elementlarni indeks orqali o'chirib tashlash

# print(len(list_numbers))
# print(list_numbers)

# for item in range(20):
#     print(item)

#
# if 4 in list_numbers:
#     print(True)

# number = int(input('Son kiriting: '))
#
# while number != 1:
#     number = int(input('Son kiriting: '))


list_numbers = [12, 4, 32, 44, 23, 4]
print('[12, 4, 32, 44, 23, 4]')
target = int(input('sonlardan birini kiriting: '))
found = False
index = 0
i = 0
while i < len(list_numbers):
    if list_numbers[i] == target:
        index = i
        found = True
    i += 1
if found == True:
    print(f"Element {target} indeksda: {index}")
