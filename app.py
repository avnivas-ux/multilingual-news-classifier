from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load models
models = {
    "Assamese": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\assamese_model.pkl", "rb")),
    "Bangla": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\bangla_model.pkl", "rb")),
    "English": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\english_model.pkl", "rb")),
    "Gujarati": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\gujarati_model.pkl", "rb")),
    "Hindi": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\hindi_model.pkl", "rb")),
    "Malayalam": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\malayalam_model.pkl", "rb")),
    "Odia": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\odia_model.pkl", "rb")),
    "Tamil": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\tamil_model.pkl", "rb")),
    "Telugu": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\telugu_model.pkl", "rb"))
}

# Load vectorizers
vectorizers = {
    "Assamese": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\assamese_vectorizer.pkl", "rb")),
    "Bangla": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\bangla_vectorizer.pkl", "rb")),
    "English": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\english_vectorizer.pkl", "rb")),
    "Gujarati": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\gujarati_vectorizer.pkl", "rb")),
    "Hindi": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\hindi_vectorizer.pkl", "rb")),
    "Malayalam": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\malayalam_vectorizer.pkl", "rb")),
    "Odia": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\odia_vectorizer.pkl", "rb")),
    "Tamil": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\tamil_vectorizer.pkl", "rb")),
    "Telugu": pickle.load(open(r"C:\Users\admin\Desktop\fakenews\models\telugu_vectorizer.pkl", "rb")),
}

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        print("\n🔥 Incoming Request:", data)

        news = data.get('text')
        language = data.get('language')

        if not news:
            return jsonify({"error": "No text provided"}), 400

        if not language:
            return jsonify({"error": "No language selected"}), 400

        language = language.strip()

        if language not in models:
            return jsonify({"error": f"Invalid language: {language}"}), 400

        model = models[language]
        vectorizer = vectorizers[language]

        # 🔍 DEBUG INFO
        print("Language:", language)
        print("Model expects features:", model.n_features_in_)
        print("Vectorizer provides features:", len(vectorizer.get_feature_names_out()))

        transformed_input = vectorizer.transform([news])

        prediction = model.predict(transformed_input)[0]

        result = "Real News" if prediction == 1 else "Fake News"

        return jsonify({
            "prediction": result
        })

    except Exception as e:
        print("❌ ERROR:", str(e))
        return jsonify({"error": str(e)}), 500


@app.route('/')
def home():
    return "Backend is running 🚀"


if __name__ == "__main__":
    app.run(debug=True)