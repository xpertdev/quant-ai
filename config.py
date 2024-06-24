import os

class Config:
    LOG_PATH = os.getenv('LOG_PATH', "/var/log/improbability/quant/")
    SECRET_KEY = os.getenv('SECRET_KEY')
    SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
    GOOGLE_ANALYTICS_ID = os.getenv('GOOGLE_ANALYTICS_ID')
    if GOOGLE_ANALYTICS_ID and GOOGLE_ANALYTICS_ID.upper() == 'NONE':
        GOOGLE_ANALYTICS_ID = None
    GOOGLE_SITE_VERIFICATION = os.getenv('GOOGLE_SITE_VERIFICATION')
    if GOOGLE_SITE_VERIFICATION and GOOGLE_SITE_VERIFICATION.upper() == 'NONE':
        GOOGLE_SITE_VERIFICATION = None
    BING_SITE_VERIFICATION = os.getenv('BING_SITE_VERIFICATION')
    if BING_SITE_VERIFICATION and BING_SITE_VERIFICATION.upper() == 'NONE':
        BING_SITE_VERIFICATION = None
