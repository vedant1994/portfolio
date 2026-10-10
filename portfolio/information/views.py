import os
from pathlib import Path
from django.shortcuts import render

def get_env_variable(key, default=''):
    if key in os.environ:
        return os.environ[key]
    
    # Path to root .env file
    root_dir = Path(__file__).resolve().parent.parent.parent
    env_file = root_dir / '.env'
    
    if env_file.exists():
        with open(env_file, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    k, v = line.split('=', 1)
                    if k.strip() == key:
                        return v.strip()
    return default

def homepage(request):
    context = {
        'web3forms_key': get_env_variable('WEB3FORMS_ACCESS_KEY')
    }
    return render(request, 'index.html', context)