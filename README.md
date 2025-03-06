# Datastore and Firebase Auth Example based on tutorial

A web application built with Flask that uses Firebase Authentication and Google Cloud Datastore to track user visits.

tutorial link: https://cloud.google.com/appengine/docs/standard/python3/building-app <br />
working app demo: https://hello-world-app-452810.ew.r.appspot.com/

<img width="653" alt="Screenshot 2025-03-06 at 15 11 17" src="https://github.com/user-attachments/assets/b24065bc-6971-4e01-bd01-e7910f885859" />

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
