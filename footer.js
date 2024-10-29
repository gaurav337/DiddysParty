document.addEventListener("DOMContentLoaded", function () {
  // Create the footer HTML
  const footerHTML = `
    <footer class="footer py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="d-flex align-items-center justify-content-center mb-3">
              <img
                src="images/logo.png"
                alt="Diddy's Party Logo"
                class="me-2 rounded-circle"
                style="height: 40px; width: 40px; object-fit: cover"
              />
              <h5 class="fw-bold mb-0 text-white">Diddy's Party</h5>
            </div>
            <p class="text-light text-center">
              Empowering musicians worldwide to create, collaborate, and share
              their music with our innovative platform.
            </p>
            <div class="d-flex gap-3 mt-3 justify-content-center">
              <a href="#" class="social-link text-white"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-link text-white"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-link text-white"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-link text-white"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
          <div class="col-md-2 mb-4">
            <h5 class="fw-bold mb-3 text-white">Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="#features" class="text-light text-decoration-none">Features</a></li>
              <li><a href="#resources" class="text-light text-decoration-none">Resources</a></li>
              <li><a href="#testimonials" class="text-light text-decoration-none">Testimonials</a></li>
              <li><a href="#contact" class="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-2 mb-4">
            <h5 class="fw-bold mb-3 text-white">Support</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light text-decoration-none">Help Center</a></li>
              <li><a href="#" class="text-light text-decoration-none">Community</a></li>
              <li><a href="#" class="text-light text-decoration-none">Terms of Service</a></li>
              <li><a href="#" class="text-light text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="col-md-4 mb-4">
            <h5 class="fw-bold mb-3 text-white">Contact Us</h5>
            <ul class="list-unstyled text-light">
              <li><i class="fas fa-map-marker-alt me-2"></i> 123 Music Street, Melody City</li>
              <li><i class="fas fa-phone me-2"></i> (555) 123-4567</li>
              <li><i class="fas fa-envelope me-2"></i> contact@diddysparty.com</li>
            </ul>
          </div>
        </div>
        <hr class="mt-4 mb-3 bg-light" />
        <div class="row">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0 text-light">
              &copy; 2024 Diddy's Party. All rights reserved.
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <p class="mb-0 text-light">
              Made with <i class="fas fa-heart text-danger"></i> for musicians
              by Gaurav
            </p>
          </div>
        </div>
      </div>
    </footer>
    `;

  // Create style element for footer styles
  const footerStyles = `
        <style>
            .footer {
                background-color: #2d3748;
                color: white;
                padding: 3rem 0;
                justify-content: center;
            }

            .social-link {
                color: white;
                opacity: 0.75;
                transition: opacity 0.3s ease;
            }

            .social-link:hover {
                opacity: 1;
            }

            @media (max-width: 1200px) {
                .footer .row {
                    flex-direction: column;
                    align-items: center;
                }
                .footer .col-md-4, .footer .col-md-2 {
                    margin-bottom: 2rem;
                    text-align: center;
                }
            }

            @media (max-width: 992px) {
                .footer .col-md-4, .footer .col-md-2 {
                    margin-bottom: 1rem;
                }
            }

            @media (max-width: 768px) {
                .footer {
                    text-align: center;
                }

                .footer .col-md-6 {
                    margin-bottom: 1rem;
                }
            }
        </style>
    `;

  // Insert the footer at the end of the body
  document.body.insertAdjacentHTML("beforeend", footerHTML);
  document.head.insertAdjacentHTML("beforeend", footerStyles);
});
