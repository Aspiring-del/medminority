document.addEventListener("DOMContentLoaded", function () {
    // All listed provider profiles have permission to be public.
    const hiddenProviderPages = new Set();

    const currentPage = window.location.pathname.split("/").pop();

    if (hiddenProviderPages.has(currentPage)) {
        window.location.replace("find.html");
        return;
    }
    document.querySelectorAll("[data-coming-soon]").forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault();
        });
    });

    const doctors = [
        {
            id: 1,
            name: "Olufunsho D. Adamolekun",
            specialty: "Vascular Surgery",
            city: "Pinehurst",
            ethnicity: "",
            practice: "Pinehurst Surgical Clinic",
            profile: "provider-adamolekun.html"
        },
        {
            id: 2,
            name: "Madonna A. Biritwum",
            specialty: "Infectious Disease",
            city: "Pinehurst",
            ethnicity: "",
            practice: "FirstHealth",
            profile: "provider-biritwum.html"
        },
        {
            id: 3,
            name: "Diana Riddley",
            specialty: "Family Medicine",
            city: "Raeford",
            ethnicity: "",
            practice: "FirstHealth Primary Care",
            profile: "provider-riddley.html"
        },
        {
            id: 4,
            name: "Inga S. Aikman",
            specialty: "Pediatrics",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-aikman.html"
        },
        {
            id: 5,
            name: "Uduak S. Akpan",
            specialty: "Neonatal-Perinatal Medicine / Pediatrics",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-akpan.html"
        },
        {
            id: 6,
            name: "Afe D. Alexis",
            specialty: "Pulmonary Disease / Sleep Medicine",
            city: "Roanoke Rapids",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-alexis.html"
        },
        {
            id: 7,
            name: "Meshka K. Anderson",
            specialty: "Transplant Surgery / General Surgery",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-anderson.html"
        },
        {
            id: 8,
            name: "Rochelle C. Asagbra",
            specialty: "Emergency Medicine",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-asagbra.html"
        },
        {
            id: 9,
            name: "Ashley D. Atkinson",
            specialty: "Obstetrics & Gynecology",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-atkinson.html"
        },
        {
            id: 10,
            name: "Ongeri J. Ayako",
            specialty: "Internal Medicine",
            city: "Ahoskie",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-ayako.html"
        },
        {
            id: 11,
            name: "Hostensia M. Beng-Ongey",
            specialty: "Pediatric Nephrology / Pediatrics",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-beng-ongey.html"
        },
        {
            id: 12,
            name: "Corenthian J. Booker",
            specialty: "Maternal & Fetal Medicine / Obstetrics & Gynecology",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-booker.html"
        },
        {
            id: 13,
            name: "Lorin E. Guillory Johnson",
            specialty: "Hospice and Palliative Medicine / Hospitalist",
            city: "Pinehurst",
            ethnicity: "",
            practice: "FirstHealth",
            profile: "provider-guillory-johnson.html"
        },
        {
            id: 14,
            name: "Charles Ofosu",
            specialty: "Hospitalist / Internal Medicine",
            city: "Pinehurst",
            ethnicity: "",
            practice: "FirstHealth",
            profile: "provider-ofosu.html"
        },
        {
            id: 15,
            name: "John M. Ray Jr.",
            specialty: "Family Medicine",
            city: "Fayetteville",
            ethnicity: "",
            practice: "FirstHealth",
            profile: "provider-ray.html"
        },
        {
            id: 16,
            name: "Jocelyn A. Myers",
            specialty: "Endocrinology",
            city: "Myrtle Beach",
            state: "SC",
            ethnicity: "",
            practice: "Carolina Health Specialists",
            profile: "provider-pdmpa-myers.html"
        },
        {
            id: 17,
            name: "Joslyn L. Angus Jr.",
            specialty: "Family Medicine",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Jeter-Skinner Family Practice",
            profile: "provider-pdmpa-angus.html"
        },
        {
            id: 18,
            name: "Morris E. Brown III",
            specialty: "Family Medicine",
            city: "Lake City",
            state: "SC",
            ethnicity: "",
            practice: "Lake City Family Medicine",
            profile: "provider-pdmpa-brown.html"
        },
        {
            id: 19,
            name: "Treadwell Campbell",
            specialty: "Family Medicine",
            city: "Mullins",
            state: "SC",
            ethnicity: "",
            practice: "Campbell Family Practice",
            profile: "provider-pdmpa-campbell.html"
        },
        {
            id: 20,
            name: "Loretta Hicks",
            specialty: "Family Medicine",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Florence CBOC / Columbia VA Healthcare System",
            profile: "provider-pdmpa-hicks.html"
        },
        {
            id: 21,
            name: "Focell Jackson-Dozier",
            specialty: "Family Medicine",
            city: "Timmonsville",
            state: "SC",
            ethnicity: "",
            practice: "McLeod Family Practice",
            profile: "provider-pdmpa-jackson-dozier.html"
        },
        {
            id: 22,
            name: "Yvette Mbangowah",
            specialty: "Family Medicine / Obesity Medicine",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Jeter Skinner Family Practice",
            profile: "provider-pdmpa-mbangowah.html"
        },
        {
            id: 23,
            name: "Chelsea N. Thompson",
            specialty: "Family Medicine",
            city: "Mullins",
            state: "SC",
            ethnicity: "",
            practice: "McLeod Family Medicine Marion",
            profile: "provider-pdmpa-thompson.html"
        },
        {
            id: 24,
            name: "Ashekia F. Pinckney",
            specialty: "Obstetrics & Gynecology",
            city: "Hartsville",
            state: "SC",
            ethnicity: "",
            practice: "Women's Care of Hartsville",
            profile: "provider-pdmpa-pinckney.html"
        },
        {
            id: 25,
            name: "Leroy F. Robinson",
            specialty: "Obstetrics & Gynecology",
            city: "Hartsville",
            state: "SC",
            ethnicity: "",
            practice: "Women's Care of Hartsville",
            profile: "provider-pdmpa-robinson.html"
        },
        {
            id: 26,
            name: "Germina Suffrant",
            specialty: "Obstetrics & Gynecology",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "MUSC OB/GYN Florence",
            profile: "provider-pdmpa-suffrant.html"
        },
        {
            id: 27,
            name: "Rodney K. Alan",
            specialty: "Orthopaedic Surgery",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "McLeod Orthopaedics",
            profile: "provider-pdmpa-alan.html"
        },
        {
            id: 28,
            name: "Michael V. Mills",
            specialty: "Orthopaedic Spine Surgery",
            city: "Hartsville",
            state: "SC",
            ethnicity: "",
            practice: "Carolina Pines Regional Medical Center",
            profile: "provider-pdmpa-mills.html"
        },
        {
            id: 29,
            name: "Sheron Abraham",
            specialty: "Hospital Medicine",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "MUSC Health Florence Division",
            profile: "provider-pdmpa-abraham.html"
        },
        {
            id: 30,
            name: "Grace Gbigbi-Jackson",
            specialty: "Family Medicine / Primary Care",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "MUSC Health Florence Medical Center",
            profile: "provider-pdmpa-gbigbi-jackson.html"
        },
        {
            id: 31,
            name: "Don K. Dawson, DMD",
            specialty: "Dentistry",
            city: "Not listed",
            state: "SC",
            ethnicity: "",
            practice: "Not listed in the directory",
            profile: "provider-pdmpa-dawson.html"
        },
        {
            id: 32,
            name: "Veronica D. Mathis, DMD",
            specialty: "Dentistry",
            city: "Dillon",
            state: "SC",
            ethnicity: "",
            practice: "Comprehensive Dental Center",
            profile: "provider-pdmpa-mathis.html"
        },
        {
            id: 33,
            name: "Jachelle A.G. Sprattling, DMD",
            specialty: "Dentistry / Dental Implant Placement and Restoration",
            city: "Latta",
            state: "SC",
            ethnicity: "",
            practice: "Latta Family Dentistry",
            profile: "provider-pdmpa-jachelle-sprattling.html"
        },
        {
            id: 34,
            name: "Kareem Sprattling, DMD",
            specialty: "Dentistry / Cosmetic Dentistry",
            city: "Latta",
            state: "SC",
            ethnicity: "",
            practice: "Latta Family Dentistry",
            profile: "provider-pdmpa-kareem-sprattling.html"
        },
        {
            id: 35,
            name: "LaVanda Martin, FNP-BC",
            specialty: "Family Nurse Practitioner / Primary Care",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Revived Medical Community Clinic",
            profile: "provider-pdmpa-martin.html"
        },
        {
            id: 36,
            name: "Mary Mitchell, BSN, MSN, APRN, FNP-BC",
            specialty: "Family Nurse Practitioner",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "HopeHealth, Inc.",
            profile: "provider-pdmpa-mitchell.html"
        },
        {
            id: 37,
            name: "Linda Wilds, FNP",
            specialty: "Family Nurse Practitioner",
            city: "Marion",
            state: "SC",
            ethnicity: "",
            practice: "Health Care Partners of South Carolina",
            profile: "provider-pdmpa-wilds.html"
        },
        {
            id: 38,
            name: "Selina F. White, DNP, APRN, AGNP-C",
            specialty: "Geriatric Nurse Practitioner / Hospice and Palliative Care",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Life Savior Palliative Care / Life Savior In Home Patient Care",
            profile: "provider-pdmpa-white.html"
        },
        {
            id: 39,
            name: "Michelle L. Brooks, OD",
            specialty: "Optometry",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Eyes Over Florence",
            profile: "provider-pdmpa-brooks.html"
        },
        {
            id: 40,
            name: "Aaron Haire, DPM",
            specialty: "Podiatry / Foot and Ankle Surgery",
            city: "Florence / Hartsville",
            state: "SC",
            ethnicity: "",
            practice: "Physicians Footcare",
            profile: "provider-pdmpa-haire.html"
        },
        {
            id: 41,
            name: "Hillery Dolford, DNP, FNP-C, WCC, DWC",
            specialty: "Family Nurse Practitioner / Diabetes Wound and Foot Care",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Sweet Feet Diabetic Foot Spa",
            profile: "provider-pdmpa-dolford.html"
        },
        {
            id: 42,
            name: "Kevin L. Ray, DPM, JD",
            specialty: "Podiatry / Foot and Ankle Surgery",
            city: "Florence / Hartsville",
            state: "SC",
            ethnicity: "",
            practice: "Physicians Footcare",
            profile: "provider-pdmpa-kevin-ray.html"
        },
        {
            id: 43,
            name: "Alexis Sanders, Ph.D.",
            specialty: "Licensed Clinical Psychology",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Bask Psychological Services, LLC",
            profile: "provider-pdmpa-sanders.html"
        },
        {
            id: 44,
            name: "Carol S. Wright, Ed.D.",
            specialty: "Clinical Social Work",
            city: "Florence / Lake City",
            state: "SC",
            ethnicity: "",
            practice: "CW Counseling & Consulting, LLC",
            profile: "provider-pdmpa-wright.html"
        },
        {
            id: 45,
            name: "Sharon L. Black, Ph.D.",
            specialty: "Behavioral Health / Licensed Independent Social Work",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "HopeHealth, Inc.",
            profile: "provider-pdmpa-black.html"
        },
        {
            id: 46,
            name: "Natalie C. Brown-Kelly, M.Ed., M.A., CCC-SLP",
            specialty: "Speech-Language Pathology",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Clark Speech Language Therapy Service, LLC",
            profile: "provider-pdmpa-brown-kelly.html"
        },
        {
            id: 47,
            name: "E. Lorraine Holmes, M.A., CCC-SLP",
            specialty: "Speech-Language Pathology",
            city: "Kingstree / Lake City",
            state: "SC",
            ethnicity: "",
            practice: "Williamsburg Speech Services, LLC",
            profile: "provider-pdmpa-holmes.html"
        },
        {
            id: 48,
            name: "Jennifer Evans, DC",
            specialty: "Chiropractic Medicine / Physiotherapy",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Eastern Carolina Medicine",
            profile: "provider-pdmpa-evans.html"
        },
        {
            id: 49,
            name: "David A. Gittens, DC",
            specialty: "Chiropractic Medicine",
            city: "Florence / Irmo",
            state: "SC",
            ethnicity: "",
            practice: "Gittens Health and Wellness",
            profile: "provider-pdmpa-gittens.html"
        },
        {
            id: 50,
            name: "Donya D. Wallace, Ph.D., NCC, LPCS",
            specialty: "Licensed Professional Counseling",
            city: "Lake City / Kingstree",
            state: "SC",
            ethnicity: "",
            practice: "Prime Care of the Lower Pee Dee",
            profile: "provider-pdmpa-donya-wallace.html"
        },
        {
            id: 51,
            name: "Tyrone Wallace, DC",
            specialty: "Chiropractic Medicine / Therapeutic Modalities",
            city: "Lake City / Kingstree",
            state: "SC",
            ethnicity: "",
            practice: "Prime Care of the Lower Pee Dee",
            profile: "provider-pdmpa-tyrone-wallace.html"
        },
        {
            id: 52,
            name: "Shantel A. Brissett, MD",
            specialty: "Cardiovascular Disease",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "East Carolina Heart Institute at East Carolina University",
            profile: "provider-brissett.html"
        },
        {
            id: 53,
            name: "Laticia Bryant, AGNP",
            specialty: "Adult Gerontology Nurse Practitioner",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "ECU Health Medical Center",
            profile: "provider-bryant.html"
        },
        {
            id: 54,
            name: "Francis E. Buckman, MD",
            specialty: "Family Medicine",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "ECU Health Medical Center",
            profile: "provider-buckman.html"
        },
        {
            id: 55,
            name: "Jonathan E. Bullock, PA-C",
            specialty: "Physician Assistant",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "ECU Health Medical Center",
            profile: "provider-bullock.html"
        },
        {
            id: 56,
            name: "Rahimallah Burnett, LCSW",
            specialty: "Social Work",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "ECU Health Behavioral Health Care - Outpatient Clinic",
            profile: "provider-burnett.html"
        },
        {
            id: 57,
            name: "Violet Awori, MD",
            specialty: "Neurology",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "ECU Health Neurology - Greenville",
            profile: "provider-awori.html"
        },
        {
            id: 58,
            name: "Brian R. Cabarrus, MD",
            specialty: "Interventional Cardiology / Cardiovascular Disease",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "East Carolina Heart Institute at East Carolina University",
            profile: "provider-cabarrus.html"
        },
        {
            id: 59,
            name: "Felicia T. Canaday, MD",
            specialty: "Pulmonary Disease",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "521 Moye Medical Center - Pulmonary, Critical Care and Sleep Medicine",
            profile: "provider-canaday.html"
        },
        {
            id: 60,
            name: "Karen D. Coward, MD",
            specialty: "Family Medicine",
            city: "Tarboro",
            state: "NC",
            ethnicity: "",
            practice: "ECU Health Family Medicine - Tarboro",
            profile: "provider-coward.html"
        },
        {
            id: 61,
            name: "S. Karlene Cunningham, PhD",
            specialty: "Psychology",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "ECU Health Behavioral Health Care - Outpatient Clinic",
            profile: "provider-cunningham.html"
        },
        {
            id: 62,
            name: "Shironda F. Daniels, AGACNP",
            specialty: "Adult Gerontology Acute Care Nurse Practitioner",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "ECU Health Medical Center",
            profile: "provider-daniels.html"
        },
        {
            id: 63,
            name: "Shannita L Applewhite, FNP",
            specialty: "Family Nurse Practitioner",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "ECU Health Medical Center",
            profile: "provider-applewhite.html"
        },
        {
            id: 64,
            name: "Kiotta L. Barnhill, ANP",
            specialty: "Adult Nurse Practitioner",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "521 Moye Medical Center - Pulmonary, Critical Care and Sleep Medicine",
            profile: "provider-barnhill.html"
        },
        {
            id: 65,
            name: "Andrew L Bates, ACNP",
            specialty: "Acute Care Nurse Practitioner",
            city: "Greenville",
            state: "NC",
            ethnicity: "",
            practice: "ECU Health Medical Center",
            profile: "provider-bates.html"
        },
        {
            id: 66,
            name: "Twyla Renee Steamer, PA-C",
            specialty: "Hospitalist",
            city: "Pinehurst",
            state: "NC",
            ethnicity: "",
            practice: "FirstHealth Hospitalists",
            profile: "provider-steamer.html"
        },
        {
            id: 67,
            name: "Tiffany Y. Thompson, CNM",
            specialty: "Obstetrics & Gynecology",
            city: "Pinehurst",
            state: "NC",
            ethnicity: "",
            practice: "FirstHealth OB/GYN",
            profile: "provider-tiffany-thompson.html"
        },
        {
            id: 68,
            name: "Markida S. Pointer, MPAS",
            specialty: "Physician Assistant",
            city: "Pinehurst",
            state: "NC",
            ethnicity: "",
            practice: "FirstHealth",
            profile: "provider-pointer.html"
        },
        {
            id: 69,
            name: "Augustina Addison, MD",
            specialty: "Obstetrics & Gynecology",
            city: "Rockingham",
            state: "NC",
            ethnicity: "",
            practice: "FirstHealth OB/GYN-Richmond",
            profile: "provider-addison.html"
        },
        {
            id: 70,
            name: "Matthew A. Daka, MD, FACC, FSCAI",
            specialty: "Interventional Cardiology / Cardiovascular Disease",
            city: "Fayetteville",
            state: "NC",
            ethnicity: "",
            practice: "FirstHealth Cardiology-Ferncreek",
            profile: "provider-daka.html"
        },
        {
            id: 71,
            name: "Patrick E. Egbe, MD",
            specialty: "Pediatrics",
            city: "Rockingham",
            state: "NC",
            ethnicity: "",
            practice: "Choice Pediatrix, PA",
            profile: "provider-egbe.html"
        },
        {
            id: 72,
            name: "Beth W. Gachuki, PA-C",
            specialty: "Urgent Care",
            city: "Pinehurst",
            state: "NC",
            ethnicity: "",
            practice: "FirstHealth",
            profile: "provider-gachuki.html"
        },
        {
            id: 73,
            name: "Mohamed A. Ibrahim, MD",
            specialty: "Obstetrics & Gynecology",
            city: "Rockingham",
            state: "NC",
            ethnicity: "",
            practice: "FirstHealth OB/GYN-Richmond",
            profile: "provider-ibrahim.html"
        },
        {
            id: 74,
            name: "Sharon M. Jackson, FNP",
            specialty: "Family Nurse Practitioner / Neurology",
            city: "Pinehurst",
            state: "NC",
            ethnicity: "",
            practice: "FirstHealth Neurology-Page Drive",
            profile: "provider-sharon-jackson.html"
        },
        {
            id: 75,
            name: "Olujide G. Lawal, MD, FACC",
            specialty: "Cardiology",
            city: "Laurinburg",
            state: "NC",
            ethnicity: "",
            practice: "FirstHealth Cardiology Services",
            profile: "provider-lawal.html"
        },
        {
            id: 76,
            name: "Martina L. Monroe, MD",
            specialty: "Family Medicine",
            city: "Raeford",
            state: "NC",
            ethnicity: "",
            practice: "FirstHealth Family Medicine-Raeford",
            profile: "provider-monroe.html"
        }
    ];

    // Only profiles not listed above are rendered in the public directory.
    const publicDoctors = doctors.filter(
        doctor => !hiddenProviderPages.has(doctor.profile)
    );

    const searchForm = document.getElementById("doctorSearchForm");
    const doctorGrid = document.getElementById("doctorGrid");
    const resultCount = document.getElementById("resultCount");
    const noResults = document.getElementById("noResults");

    if (!searchForm || !doctorGrid || !resultCount || !noResults) {
        return;
    }

    function displayDoctors(list) {
        doctorGrid.replaceChildren();

        resultCount.textContent = `${list.length} provider(s) found`;

        noResults.style.display =
            list.length === 0 ? "block" : "none";

        list.forEach(doctor => {
            const card = document.createElement("a");
            card.className = "doctor-card";
            card.href = doctor.profile;
            card.setAttribute("aria-label", `View profile for ${doctor.name}`);

            const photoPlaceholder = document.createElement("div");
            photoPlaceholder.className = "doctor-photo-placeholder";
            photoPlaceholder.setAttribute("aria-hidden", "true");

            const icon = document.createElement("i");
            icon.className = "fa-solid fa-user-doctor";
            photoPlaceholder.appendChild(icon);

            const cardContent = document.createElement("div");
            cardContent.className = "doctor-card-content";

            const name = document.createElement("h3");
            name.textContent = doctor.name;

            const specialty = document.createElement("p");
            specialty.className = "doctor-specialty";
            specialty.textContent = doctor.specialty;

            const practice = document.createElement("p");
            practice.className = "doctor-clinic";
            practice.textContent = doctor.practice;

            const city = document.createElement("p");
            city.className = "doctor-location";
            city.textContent = `${doctor.city}, ${doctor.state || "NC"}`;

            cardContent.append(name, specialty, practice, city);
            card.append(photoPlaceholder, cardContent);
            doctorGrid.appendChild(card);
        });
    }

    function searchDoctors() {
        const name = document.getElementById("searchName")
            .value.trim().toLowerCase();

        const specialty = document.getElementById("specialty").value;
        const city = document.getElementById("city").value;
        const ethnicity = document.getElementById("ethnicity").value;

        const results = publicDoctors.filter(doctor => {
            const matchesName =
                doctor.name.toLowerCase().includes(name);

            const specialtyParts = doctor.specialty.split(" / ").map(value => value.trim());
            const matchesSpecialty =
                !specialty || doctor.specialty === specialty || specialtyParts.includes(specialty);

            const cityParts = doctor.city.split(" / ").map(value => value.trim());
            const matchesCity =
                !city || doctor.city === city || cityParts.includes(city);

            const matchesEthnicity =
                !ethnicity || doctor.ethnicity === ethnicity;

            return matchesName &&
                matchesSpecialty &&
                matchesCity &&
                matchesEthnicity;
        });

        displayDoctors(results);
    }

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        searchDoctors();
    });

    ["specialty", "city", "ethnicity"].forEach(id => {
        document.getElementById(id)
            .addEventListener("change", searchDoctors);
    });

    document.getElementById("searchName")
        .addEventListener("input", searchDoctors);

    document.getElementById("resetSearch")
        .addEventListener("click", function () {
            searchForm.reset();
            displayDoctors(publicDoctors);
        });

    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("name") || "";
    const specialtyParam = params.get("specialty") || "";
    const cityParam = params.get("city") || "";
    const ethnicityParam = params.get("ethnicity") || "";

    document.getElementById("searchName").value = nameParam;
    document.getElementById("specialty").value = specialtyParam;
    document.getElementById("city").value = cityParam;
    document.getElementById("ethnicity").value = ethnicityParam;

    if (nameParam || specialtyParam || cityParam || ethnicityParam) {
        searchDoctors();
    } else {
        displayDoctors(publicDoctors);
    }
});
