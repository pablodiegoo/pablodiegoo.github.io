import os
import re

# Directory containing the certificates
directory = "./assets/json/Certificados"

# Function to format the file name
def format_filename(filename):
    # Extract the date and other parts from the filename
    match = re.match(r"(\d{4}-\d{2}-\d{2})_(.*)\.pdf", filename)
    if not match:
        return None

    date, details = match.groups()

    # Split details into course name and institution
    parts = details.split("_")
    if len(parts) < 2:
        return None

    course_name = parts[0]
    institution = "_".join(parts[1:])

    # Clean up course name and institution
    course_name = re.sub(r"[^a-zA-Z0-9]", "", course_name).capitalize()
    institution = re.sub(r"[^a-zA-Z0-9]", "", institution).capitalize()

    # Return the formatted filename
    return f"{date}_{course_name}_{institution}.pdf"

# Rename files in the directory
for filename in os.listdir(directory):
    if filename.endswith(".pdf"):
        new_name = format_filename(filename)
        if new_name:
            old_path = os.path.join(directory, filename)
            new_path = os.path.join(directory, new_name)
            os.rename(old_path, new_path)
            print(f"Renamed: {filename} -> {new_name}")
        else:
            print(f"Skipped: {filename}")