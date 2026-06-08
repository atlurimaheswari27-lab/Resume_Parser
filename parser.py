import re

file = open("resume.txt", "r")
text = file.read()

print("\n===== RESUME DETAILS =====")

email = re.findall(r'[\w\.-]+@[\w\.-]+', text)

phone = re.findall(r'\d{10}', text)

if email:
    print("Email :", email[0])

if phone:
    print("Phone :", phone[0])

print("\nResume Content:\n")
print(text)