document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mock Data ---
    const services = [
        { id: 'cut', name: 'Haircut & Style', price: '$50', duration: '60 min', icon: '<path d="M14 19.13V15.5a2.5 2.5 0 0 0-5 0v3.63"/><path d="M12 15.5V14"/><path d="M10.5 14h3"/><path d="M15.93 21.13a7 7 0 1 0-7.86 0"/><path d="M12 22v-2"/>' },
        { id: 'color', name: 'Hair Coloring', price: '$120', duration: '120 min', icon: '<path d="M18 16.5V13a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3.5a2.5 2.5 0 0 0 5 0V13h2v3.5a2.5 2.5 0 0 0 5 0Z"/><path d="M18.82 8.18a4 4 0 0 0-5.66 5.66"/><path d="M5.18 8.18a4 4 0 0 1 5.66 5.66"/>' },
        { id: 'treatment', name: 'Keratin Treatment', price: '$200', duration: '150 min', icon: '<path d="M20 13.4V10a2 2 0 0 0-2-2h-2.13a4 4 0 0 0-3.1-6.06A4 4 0 0 0 10 2a4 4 0 0 0-4.87 3.94A4 4 0 0 0 2 10v3.4c0 .8.4 1.5.9 2.1l3.1 3.9a2 2 0 0 0 3 1.1h4a2 2 0 0 0 3-1.1l3.1-3.9c.5-.6.9-1.3.9-2.1Z"/><path d="M8 10a2 2 0 1 0 4 0v0a2 2 0 1 0-4 0v0Z"/><path d="M12 14v4"/>' },
        { id: 'extensions', name: 'Hair Extensions', price: '$300+', duration: '180 min', icon: '<path d="M19 13v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3"/><path d="M15 5v7"/><path d="M12 3v9"/><path d="M9 7v5"/>' },
        { id: 'blowout', name: 'Blowout & Styling', price: '$40', duration: '45 min', icon: '<circle cx="12" cy="12" r="10"/><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/>' },
        { id: 'updo', name: 'Special Occasion Updo', price: '$85', duration: '75 min', icon: '<path d="M17.5 2c-3.14 0-5.5 2.59-5.5 5.75 0 2.15 1.25 4.02 3 4.94V14a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1.25a5.75 5.75 0 1 0-2.5 0V12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.06A4.75 4.75 0 0 1 6.5 2c3.14 0 5.5 2.59 5.5 5.75 0 1.45-.52 2.75-1.38 3.75H12a2 2 0 0 1 2 2v1.25c.8-.83 1.5-2.06 1.5-3.5C15.5 4.59 13.14 2 10 2"/>' }
    ];

    const stylists = [
        { id: 'jane', name: 'Jane Doe', specialty: 'Color & Cuts', img: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=400&auto=format&fit=crop' },
        { id: 'john', name: 'John Smith', specialty: 'Styling & Updos', img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop' },
        { id: 'emily', name: 'Emily White', specialty: 'Extensions', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop' },
        { id: 'any', name: 'Any Available', specialty: 'First Available Stylist', img: 'https://placehold.co/400x400/e2e8f0/475569?text=Any' }
    ];

    const timeSlotsData = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

    // --- Populate Dynamic Content ---
    const servicesGrid = document.getElementById('services-grid');
    const bookingServicesList = document.getElementById('booking-services-list');
    if (servicesGrid && bookingServicesList) {
        services.forEach(service => {
            // Populate services section
            const serviceCard = `
                <div class="bg-slate-50 rounded-xl p-6 text-center transition transform hover:-translate-y-2">
                    <div class="inline-block p-4 bg-indigo-100 text-indigo-600 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${service.icon}</svg>
                    </div>
                    <h3 class="text-xl font-semibold mt-4">${service.name}</h3>
                    <p class="text-slate-500 mt-2">${service.duration}</p>
                    <p class="text-2xl font-bold text-indigo-600 mt-2">${service.price}</p>
                </div>`;
            servicesGrid.innerHTML += serviceCard;

            // Populate booking form services
            const serviceRadio = `
                <div class="relative">
                    <input type="radio" id="service-${service.id}" name="service" value="${service.id}" class="sr-only">
                    <label for="service-${service.id}" class="block p-4 border border-slate-200 rounded-lg text-left hover:border-indigo-400">
                        <span class="font-semibold text-slate-800">${service.name}</span>
                        <span class="block text-sm text-slate-500">${service.duration} - ${service.price}</span>
                    </label>
                </div>`;
            bookingServicesList.innerHTML += serviceRadio;
        });
    }

    const stylistsList = document.getElementById('stylists-list');
    if (stylistsList) {
        stylists.forEach(stylist => {
            const stylistRadio = `
                <div class="relative">
                    <input type="radio" id="stylist-${stylist.id}" name="stylist" value="${stylist.id}" class="sr-only">
                    <label for="stylist-${stylist.id}" class="block p-4 border border-slate-200 rounded-lg text-center hover:border-indigo-400">
                        <img src="${stylist.img}" alt="${stylist.name}" class="w-24 h-24 rounded-full mx-auto mb-3 object-cover">
                        <span class="font-semibold text-slate-800">${stylist.name}</span>
                        <span class="block text-sm text-slate-500">${stylist.specialty}</span>
                    </label>
                </div>`;
            stylistsList.innerHTML += stylistRadio;
        });
    }

    // --- Form Stepper Logic ---
    const steps = document.querySelectorAll('.form-step');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const form = document.getElementById('booking-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    const newBookingBtn = document.getElementById('new-booking-btn');

    if (form) {
        let currentStep = 0;

        const updateButtons = () => {
            prevBtn.disabled = currentStep === 0;
            if (currentStep === steps.length - 1) {
                nextBtn.classList.add('hidden');
                submitBtn.classList.remove('hidden');
            } else {
                nextBtn.classList.remove('hidden');
                submitBtn.classList.add('hidden');
            }
        };

        const updateStepIndicator = () => {
            document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
                indicator.classList.remove('active', 'completed');
                indicator.classList.add(index < currentStep ? 'completed' : (index === currentStep ? 'active' : 'border-slate-300'));
                if (index < currentStep) {
                    indicator.innerHTML = '&#10003;'; // Checkmark
                } else {
                    indicator.innerHTML = index + 1;
                }
            });
        };

        const goToStep = (step) => {
            steps[currentStep].classList.remove('active');
            steps[step].classList.add('active');
            currentStep = step;
            updateButtons();
            updateStepIndicator();
        };

        const validateStep = () => {
            const currentInputs = steps[currentStep].querySelectorAll('input[name]');
            let isValid = true;
            currentInputs.forEach(input => {
                if (input.type === 'radio' || input.type === 'checkbox') {
                    const groupName = input.name;
                    if (!form.querySelector(`input[name="${groupName}"]:checked`)) {
                        isValid = false;
                    }
                } else if (input.required && !input.value.trim()) {
                    isValid = false;
                }
            });
            return isValid;
        };

        nextBtn.addEventListener('click', () => {
            if (validateStep()) {
                if (currentStep < steps.length - 1) {
                    goToStep(currentStep + 1);
                }
            } else {
                // Using a more user-friendly modal/toast is better than alert()
                // but for simplicity, we use alert here.
                alert('Please complete the current step before proceeding.');
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentStep > 0) {
                goToStep(currentStep - 1);
            }
        });
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateStep()) {
                const formData = new FormData(form);
                const bookingDetails = Object.fromEntries(formData.entries());
                
                // Get readable names
                const serviceId = bookingDetails.service;
                const stylistId = bookingDetails.stylist;
                const selectedService = services.find(s => s.id === serviceId);
                const selectedStylist = stylists.find(s => s.id === stylistId);
                
                // Display confirmation
                document.getElementById('booking-summary').innerHTML = `
                    <h4 class="text-lg font-semibold mb-3 border-b pb-2">Booking Summary</h4>
                    <p class="flex justify-between"><strong>Service:</strong> <span>${selectedService.name}</span></p>
                    <p class="flex justify-between mt-2"><strong>Stylist:</strong> <span>${selectedStylist.name}</span></p>
                    <p class="flex justify-between mt-2"><strong>Date:</strong> <span>${bookingDetails['booking-date']}</span></p>
                    <p class="flex justify-between mt-2"><strong>Time:</strong> <span>${bookingDetails.time}</span></p>
                    <p class="flex justify-between mt-2"><strong>Name:</strong> <span>${bookingDetails['user-name']}</span></p>
                `;
                form.style.display = 'none';
                document.querySelector('.step-indicator').parentElement.style.display = 'none';
                confirmationMessage.classList.remove('hidden');
            } else {
                alert('Please fill in all your details.');
            }
        });

        newBookingBtn.addEventListener('click', () => {
            form.reset();
            confirmationMessage.classList.add('hidden');
            form.style.display = 'block';
            document.querySelector('.step-indicator').parentElement.style.display = 'flex';
            goToStep(0);
        });

        // Initialize first step
        updateButtons();
        updateStepIndicator();
    }


    // --- Date & Time Logic ---
    const dateInput = document.getElementById('booking-date');
    const timeSlotsContainer = document.getElementById('time-slots');
    const timeSlotMessage = document.getElementById('time-slot-message');

    if (dateInput) {
        // Set min date to today
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);

        dateInput.addEventListener('change', (e) => {
            const selectedDate = e.target.value;
            timeSlotsContainer.innerHTML = '';
            if (selectedDate) {
                timeSlotMessage.classList.add('hidden');
                // Simulate fetching available slots.
                timeSlotsData.forEach((time, index) => {
                    // Randomly make some slots unavailable for demo purposes
                    const isAvailable = Math.random() > 0.3;
                    const timeSlotHTML = `
                        <div class="relative">
                            <input type="radio" id="time-${index}" name="time" value="${time}" class="sr-only" ${!isAvailable ? 'disabled' : ''}>
                            <label for="time-${index}" class="block p-2 border rounded-lg text-center text-sm ${isAvailable ? 'border-slate-300 hover:border-indigo-400 cursor-pointer' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}">
                                ${time}
                            </label>
                        </div>
                    `;
                    timeSlotsContainer.innerHTML += timeSlotHTML;
                });
            } else {
                timeSlotMessage.classList.remove('hidden');
            }
        });
        timeSlotMessage.classList.remove('hidden');
    }
    
    // --- Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
