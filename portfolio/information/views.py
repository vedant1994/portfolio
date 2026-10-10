import os
from django.shortcuts import render

def homepage(request):
    context = {
        'web3forms_key': os.getenv('WEB3FORMS_ACCESS_KEY', 'YOUR_WEB3FORMS_ACCESS_KEY')
    }
    return render(request, 'index.html', context)