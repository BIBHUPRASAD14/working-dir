import os

import tkinter as tk
from tkinter import ttk
from tkinter import filedialog 
from tkinter.messagebox import showinfo

import shutil

# part 1(creating folder for output)
print("Enter the folder name for the output:")
res = input()
res_path = os.path.join(os.getcwd(),res)

if not os.path.exists(res_path):
    os.makedirs(res_path)
    print(f"Created directory '{res}'.")
    

# part 2(selecting the files)


# Function to select files and print their file types

# Create a file dialog for selecting files
file_paths = filedialog.askopenfilenames()

if file_paths:
    for file_path in file_paths:
        file_name = os.path.basename(file_path)
        file_extension = os.path.splitext(file_name)[1]
        print(f"File: {file_name}, File Type: {file_extension}")
        file_extension = file_extension.lstrip(".")
        
        
        
        # part 3(creating dir for file extensions)
        
        # inserting new directories in result
        file_extension_path = os.path.join(res_path, file_extension)
        if not os.path.exists(file_extension_path):
            os.makedirs(file_extension_path)
            print(f"The folder {file_extension} is created!!")
            
        else:
            print(f"The folder {file_extension} already exists!!")
            
        shutil.copy2(file_path, file_extension_path)
        print(f"Copied '{file_name}' to '{file_extension}'")


# Create a tkinter root window (it won't be displayed)
root = tk.Tk()
root.withdraw()  # Hide the root window

# Call the function to select files and print their types

    



