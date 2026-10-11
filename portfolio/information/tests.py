from django.test import TestCase
from django.urls import reverse

class HomepageTest(TestCase):
    def test_homepage_status_code(self):
        response = self.client.get(reverse('homepage'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')

