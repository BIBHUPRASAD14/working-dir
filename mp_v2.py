import os

import tkinter as tk
from tkinter import ttk
from tkinter import filedialog 
from tkinter.messagebox import showinfo

import shutil


# part 1(selecting the files)


# Function to select files and print their file types


# Create a file dialog for selecting files
def dir_for_filetype(result_path):
    
    out_path = os.path.join(os.getcwd(),result_path)


    if not os.path.exists(result_path):
        os.makedirs(result_path)
        # print(f"Created directory '{res}'.")
    res_content = os.listdir(result_path)
    if not res_content:
        os.removedirs(result_path)

    file_paths = filedialog.askopenfilenames()

    if file_paths:
        for file_path in file_paths:
            file_name = os.path.basename(file_path)
            file_extension = os.path.splitext(file_name)[1]
            # print(f"File: {file_name}, File Type: {file_extension}")
            file_extension = file_extension.lstrip(".")
            
            
            
            # part 2(creating dir for file extensions)
            
            # inserting new directories in result
            file_extension_path = os.path.join(out_path, file_extension)
            if not os.path.exists(file_extension_path):
                os.makedirs(file_extension_path)
                # print(f"The folder {file_extension} is created!!")
                
            # else:
                # print(f"The folder {file_extension} already exists!!")
                
            shutil.copy2(file_path, file_extension_path)
            # print(f"Copied '{file_name}' to '{file_extension}'")
            
    return result_path
            
            
            


# Create a tkinter root window (it won't be displayed)
root = tk.Tk()
root.withdraw()  # Hide the root window


# Call the function to select files and print their types

# part 3(creating folder for output)
if (__name__) == "__main__":
    print("Enter the folder name for the output:")
    res = input()
    dir_for_filetype(res)

