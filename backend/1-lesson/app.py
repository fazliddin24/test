# users = {
#     "astron": {"password": "astron", "balance": 1000},
#     "fazliddin": {"password": "astron", "balance": 2000}
# }
#
#
# def atm():
#     username = input("Username: ")
#     if username not in users:
#         print("User not found!")
#         return
#
#     password = input("Password: ")
#     if users[username]["password"] != password:
#         print("Incorrect password!")
#         return
#
#     print("\nWelcome to the ATM!")
#     while True:
#         print("\nOptions:")
#         print("1. Check Balance")
#         print("2. Withdraw Money")
#         print("3. Deposit Money")
#         print("4. Exit")
#
#         choice = input("Choose an option (1-4): ")
#
#         if choice == "1":
#             print(f"Your balance: ${users[username]['balance']}")
#         elif choice == "2":
#             amount = float(input("Enter amount to withdraw: "))
#             if amount > users[username]['balance']:
#                 print("Insufficient funds!")
#             else:
#                 users[username]['balance'] -= amount
#                 print(f"Withdrawal successful! New balance: ${users[username]['balance']}")
#         elif choice == "3":
#             amount = float(input("Enter amount to deposit: "))
#             users[username]['balance'] += amount
#             print(f"Deposit successful! New balance: ${users[username]['balance']}")
#         elif choice == "4":
#             print("Exiting ATM. Goodbye!")
#             break
#         else:
#             print("Invalid option. Try again!")
#
#
# atm()
#

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
# if 4 not in list_numbers:
#     print(True)

# number = int(input('Son kiriting: '))
#
# while number != 1:
#     number = int(input('Son kiriting: '))


# list_numbers = [12, 4, 32, 44, 23, 4]
# target = int(input('son kiriting: '))
# found = False
# index = 0
# i = 0
# while i < len(list_numbers):
#     if list_numbers[i] == target:
#         index = i
#         found = True
#     i += 1
# if found == True:
#     print(f"Element {target} indeksda: {index}")
# else:
#     print('kiritilgan son mavjud emas')

# list_numbers = [12, 12, 12, 44, 4, 32, 44, 23, 4]
# target = int(input('Son kiriting: '))
# count = 0
#
# for num in list_numbers:
#     if num == target:
#         count += 1
# print(f"{target} soni ro'yxatda {count} marta uchraydi.")


# list_numbers = [12, 12, 12, 44, 4, 32, 44, 23, 4]
# num2 = []
#
# for num in list_numbers:
#     if num not in num2:
#         count = 0
#         for son in list_numbers:
#             if son == num:
#                 count += 1
#         print(f"{num} soni ro'yxatda {count} marta uchraydi.")
#         num2.append(num)



# def plus(number1, number2):
#     return number1 + number2, 16
#
#
# number = plus(number2=12, number1=3)
# print(number)


# ishchi = {
#     "ism": 'SHerbek',
#     "oylik": 1500,
# }

# def oylik_hisob():
#     oy = int(input("Neca oy ishladi ? "))
#     jami = 0
#     print(range(1, oy + 1))
#     for i in range(1, oy + 1):
#         jami += ishchi["oylik"]
#     print(f"{ishchi['ism']} {oy} oy jami {jami}$ ish haqi oladi.")
# oylik_hisob()

# def oylik_hisob():
#     oy = int(input("Necha oy ishladi? "))
#     jami = 0
#     i = 1
#     while i <= oy:
#         jami += ishchi["oylik"]
#         i += 1
#     print(f"{ishchi['ism']} {oy} oy jami {jami}$ ish haqi oladi.")
# oylik_hisob()

#
# def qosh(x, y):
#     return x + y
# def ayir(x, y):
#     return x - y
# def kop(x, y):
#     return x * y
# def bol(x, y):
#     if y == 0:
#         return "Nolga bolib bolmaydi j*@#*"
#     return x / y
# def calc():
#
#     x = float(input("Birinchi sonni kirit: "))
#     am = input("Amalni yoz: ")
#     y = float(input("Ikkinchi sonni kirit: "))
#     if am == '+':
#         print("Natija:", qosh(x, y))
#     elif am == '-':
#         print("Natija:", ayir(x, y))
#     elif am == '*':
#         print("Natija:", kop(x, y))
#     elif am == '/':
#         print("Natija:", bol(x, y))
#     else:
#         print("Noto'g'ri amal!")
# calc()
#
#
#

# def my_function(ism, fam):
#   print(ism + " " + fam)
#
# my_function("anvar", "anvarov")

# class Calc:
#     def __init__(self, num1, num2):
#         self.num1 = num1
#         self.num2 = num2
#
#     def __str__(self):
#         return "Kalkulyator"
#
#     def plus(self):
#         print(self.num1 + self.num2)
#
#     def plus2(self):
#         print(self.num1 + self.num2)
#
#
#
# calc = Calc(20, 15)
# print(calc)
# calc.plus()
#
# calc.plus2()


# class Calc:
#     def __init__(self, num1, num2):
#         self.num1 = num1
#         self.num2 = num2
#
#     def __str__(self):
#         return "Kalkulyator"
#
#     def plus(self):
#         print(self.num1 + self.num2)
#
#     def minus(self):
#         print(self.num1 - self.num2)
#
#     def multiply(self):
#         print(self.num1 * self.num2)
#
#     def divide(self):
#         if self.num2 == 0:
#             print("Xatolik: nolga bo‘lish mumkin emas!")
#         else:
#             print(self.num1 / self.num2)
#
# calc = Calc(100, 15)
# print(calc)
# calc.plus()
# calc.minus()
# calc.multiply()
# calc.divide()
# class Bankomat:
#     def __init__(self):
#         self.users = {
#             "ASTRON": {"parol": "1234", "balans": 10000},
#             "SHERBEK": {"parol": "1234", "balans": 20000},
#             "astron": {"parol": "1234", "balans": 10000},
#             "sherbek": {"parol": "1234", "balans": 20000}
#         }
#
#     def kirish(self):
#         user = input("Foydalanuvchi nomi: ")
#         if user not in self.users:
#             print("Foydalanuvchi topilmadi!")
#             return None
#
#         parol = input("Parol: ")
#         if self.users[user]["parol"] != parol:
#             print("Noto‘g‘ri parol!")
#             return None
#
#         return user
#
#     def menyu(self):
#         print("\nBankomatga xush kelibsiz!")
#         for x in range(100):
#             print("\nTanlovlar:")
#             print("1. Balansni tekshirish")
#             print("2. Pul yechish")
#             print("3. Pul kiritish")
#
#             option = input("Tanlovni kiriting (1-3): ")
#
#             if option == "1":
#                 self.balansni()
#             elif option == "2":
#                 self.yechish()
#             elif option == "3":
#                 self.kiritish()
#             else:
#                 print("Noto‘g‘ri buyruq! Qayta urinib ko‘ring.")
#
#     def balansni(self):
#         print(f"Sizning balansingiz: ${self.users[self.foy]['balans']}")
#
#     def yechish(self):
#         summa = float(input("Qancha pul yechmoqchisiz: "))
#         if summa > self.users[self.foy]['balans']:
#             print("Yetarli mablag‘ mavjud emas!")
#         else:
#             self.users[self.foy]['balans'] -= summa
#             print(f"Pul muvaffaqiyatli yechildi! Yangi balans: ${self.users[self.foy]['balans']}")
#
#     def kiritish(self):
#         summa = float(input("Qancha pul kiritmoqchisiz: "))
#         self.users[self.foy]['balans'] += summa
#         print(f"Pul muvaffaqiyatli kiritildi! Yangi balans: ${self.users[self.foy]['balans']}")
#
#     def ishga_tushirish(self):
#         self.foy = self.kirish()
#         if self.foy:
#             self.menyu()
#
#
# bankomat = Bankomat()
# bankomat.ishga_tushirish()


# ishchi  oyligi 3.000.000 avansi 40% iga yani 1.200.000 ga teng
# uni davlatga tolanadigan qismi 20% yani 600.000
# dars soati 20 dan otsa 400.000 yana qoshiladi
# bunda pul yechish qismi boladi
# pul yechish bosilganda birinchi avans dan olinadi
# keyin oylikka otadi 3.000.000 umumiy balans uni ichiga avans ham kiradi
# davlatga tolanmagan false bolsa davlatga tolash bolimi ham boladi va pulning 20% yechib olinadi


# class Ishchi:
#     def __init__(self):
#         self.umumiy_balans = 3000000
#         self.avans = 1200000
#         self.oylik = self.umumiy_balans - self.avans
#         self.davlatga = False
#
#     def balans(self):
#         print(f"Jami balans: {self.umumiy_balans} so'm")
#         print(f"Avans qismi: {self.avans} so'm")
#         print(f"Davlatga to'langan: {'Ha' if self.davlatga else 'Yo‘q'}")
#
#     def yechish(self, summa):
#         if summa <= self.avans:
#             self.avans -= summa
#             self.umumiy_balans -= summa
#         elif summa <= self.umumiy_balans:
#             summa -= self.avans
#             self.umumiy_balans -= summa
#             self.avans = 0
#         else:
#             print("Yetarli mablag‘ yo‘q!")
#             return
#         print(f"{summa} so'm muvaffaqiyatli yechildi. Yangi balans: {self.umumiy_balans} so'm")
#
#     def davlat_tolash(self):
#         if not self.davlatga:
#             davlat = self.umumiy_balans * 0.2
#             if self.umumiy_balans >= davlat:
#                 self.avans -= davlat
#                 self.umumiy_balans -= self.avans
#                 self.davlatga = True
#                 print(f"{davlat} so'm davlatga to‘landi. Qolgan balans: {self.umumiy_balans} so'm")
#             else:
#                 print("Yetarli mablag‘ yo‘q!")
#         else:
#             print("Davlatga allaqachon to‘langan!")
#
#     def bonus(self, soat):
#         if soat >= 20:
#             self.umumiy_balans += 400000
#             print(f"Qo‘shimcha bonus qo‘shildi! Yangi balans: {self.umumiy_balans} so'm")
#
#     def ishga_tushir(self):
#         while True:
#             print("\nTanlovlar:")
#             print("1. Balansni tekshirish")
#             print("2. Pul yechish")
#             print("3. Davlatga to‘lash")
#             print("4. Dars soati bonus qo‘shish")
#
#             tanlov = input("Tanlovni kiriting (1-4): ")
#
#             if tanlov == "1":
#                 self.balans()
#             elif tanlov == "2":
#                 summa = int(input("Qancha pul yechmoqchisiz: "))
#                 self.yechish(summa)
#             elif tanlov == "3":
#                 self.davlat_tolash()
#             elif tanlov == "4":
#                 soat = int(input("Dars necha soat: "))
#                 self.bonus(soat)
#
#             else:
#                 print("Noto‘g‘ri buyruq! Qayta urinib ko‘ring.")
#
#
# ishchi = Ishchi()
# ishchi.ishga_tushir()



# /module


# from module import sayhello
# sayhello()
# import module
# module.sayhello()