# Datastore and Firebase Auth Example based on tutorial

A web application built with Flask that uses Firebase Authentication and Google Cloud Datastore to track user visits.

tutorial link: https://cloud.google.com/appengine/docs/standard/python3/building-app <br />
working app demo: https://hello-world-app-452810.ew.r.appspot.com/

![Screenshot 2025-03-06 at 14 02 25](https://github.com/user-attachments/assets/f9865d6b-4d08-41e7-8ecd-a8edfa34ec36)

## Used

- Python 3.11
- Google Cloud Datastore
- Firebase Authentication

## Setup and Installation

1. Clone the repository
2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Run the application locally:
   ```
   python main.py
   ```
   
## Deployment

This application is configured for deployment to Google App Engine. Deploy using:

```
gcloud app deploy
```
