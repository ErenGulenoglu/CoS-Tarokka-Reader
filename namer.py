import os

def namer():
    # Path to the folder with the files
    folder_path = 'assets/common_deck'
    # List all files in the folder
    files = os.listdir(folder_path)
    # Sort files to keep a consistent order
    files.sort()
    # Rename files
    for i, filename in enumerate(files, start=1):
        # Get the file extension
        _, ext = os.path.splitext(filename)
        # New file name
        new_name = f"card{i}{ext}"
        # Full old and new paths
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)
        # Rename file
        os.rename(old_path, new_path)
    print("Files renamed successfully.")

if __name__ == '__main__':
    # namer()
    print("Asd")
    names = []
    for i in range(1, 41):
        name = "card" + str(i)
        names.append(name)
    print(names)

