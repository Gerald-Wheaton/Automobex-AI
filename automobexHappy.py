import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import nltk
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer
from nltk import wordpunct_tokenize, word_tokenize, sent_tokenize
from nltk.corpus import stopwords
from nltk.sentiment.vader import SentimentIntensityAnalyzer
sw = set(stopwords.words('english'))
wn = WordNetLemmatizer()
def text_token(x):
    x = x.lower()
    tokens = wordpunct_tokenize(x)
    tokens = [tok for tok in tokens if tok.isalnum()]
    tokens = [tok for tok in tokens if tok not in sw]
    tokens = [wn.lemmatize(tok) for tok in tokens]
    return(tokens)
sid = SentimentIntensityAnalyzer()
#nltk.download('vader_lexicon')
df = pd.read_csv('samplewords.csv', header=None)
df.columns = ['target', 'text']
df['tokens'] = df['text'].apply(text_token)
df['clean'] = df['tokens'].apply(lambda x: " ".join(x))
df['scores'] = df['text'].apply(lambda x: sid.polarity_scores(x))
df['compound'] = df['scores'].apply(lambda x: x['compound'])
df.to_csv('happiness.csv')
df.head()
