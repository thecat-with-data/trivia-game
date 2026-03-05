// Question Bank

const questionBank = [
    // Tech+ CertMaster Learn
    {
        question: "What is the main advantage of using a passphrase over a traditional password?",
        answers: ["Easier to forget", "Shorter in length", "Easier to remember and more secure", "More difficult to type"],
        correct: 2, // Index of the correct answer in the answers array
        explanation: "They are not designed to be harder to remember, but they do tend to be longer. The main advantage of a passphrase is memorability and security."
    },
    {
        question: "What is a pattern lock?",
        answers: ["A type of password", "A type of biometric authentication", "A predefined design on a touchscreen", "A hardware token."],
        correct: 2,
        explanation: "A pattern lock involves drawing a prefined pattern, or design, on a touchscreen."
    },
    {
        question: "Which of the following is an example of 'Something You Know'?",
        answers: ["Fingerprint", "Facial Recognition", "Hardware token", "Passphrase"],
        correct: 3,
        explanation: "A passphrase is a type of password that falls under 'Something You Know'."
    },
    {
        question: "Which of the following is a potential security concern of Single Sign-On (SSO)?",
        answers: ["Users have to remember multiple passwords.", "It is more expensive to implement.", "If a hacker gets into one account, they could access everything.", "It is slower to log in."],
        correct: 2,
        explanation: "The main downside is that if a hacker gains access to one account, they could potentially access all linked accounts."
    },
    {
        question: "What is authentication?",
        answers: ["The process of creating a new account", "The process of ensuring that each account is only operated by its proper user", "The process of deleting an account", "The process of updating account information"],
        correct: 1,
        explanation: "Authentication is the process of verifying that the person trying to access an account is the rightful owner."
    },
    {
        question: "What type of user account can do anything they want on the entire computer system?",
        answers: ["Standard User", "Guest User", "Administrator", "Limited User"],
        correct: 2,
        explanation: "Administrators have full control over the system."
    },
    {
        question: "Which permission allows a user to run a program or script from a file?",
        answers: ["Read", "Write", "Execute", "Delete"],
        correct: 2,
        explanation: "Execute permissions allow running a program or script."
    },
    {
        question: "What is the main purpose of setting permissions on files and folders?",
        answers: ["To make files look organized", "To reduce the size of files", "To control who can access and modify them", "To allow everyone to access all files"],
        correct: 2,
        explanation: "Permissions are set to control access and modifications."
    },
    {
        question: "What does 'implicit denial' mean in the context of authorization?",
        answers: ["Everyone gets access unless specifically denied", "No one gets access unless specifically allowed", "All users have full access", "Administrators only"],
        correct: 1,
        explanation: "'Implicit denial' means access is denied unless there is a specific rule allowing it."
    },
    {
        question: "Which rule states that a user should only get the access they need to do their job and nothing more?",
        answers: ["Full Access", "Administrator Access", "Least Privilege", "Standard User"],
        correct: 2,
        explanation: "'Implicit denial' means access is denied unless there is a specific rule allowing it."
    },
    {
        question: "What does the term 'standard user' refer to?",
        answers: ["A user with full control over the system", "A user with limited permissions to perform job tasks", "A user who can install new software", "A user who can delete any file"],
        correct: 1,
        explanation: "Standard users have permissions to do their job tasks but not to make system-wide changes."
    },
    {
        question: "What is 'authorization'?",
        answers: ["The process of determining what rights and privileges a particular entity has", "The process of creating new files", "The process of ensuring the account is only used by the correct user", "The process of securing physical hardware"],
        correct: 0,
        explanation: "'Authorization' is about determining what rights or permissions users can have on resources."
    },
    {
        question: "Why might your account get flagged when logging in from a different location?",
        answers: ["Because the Internet is slower in different locations", "Because logging in from unfamiliar places looks suspicious", "Because different locations have different software", "Because your computer needs to update."],
        correct: 1,
        explanation: "Logging in from an unfamiliar location can look suspicious and may trigger execurity measures to protect your account."
    },
    {
        question: "Which security measure tracks assets using a virtual boundary?",
        answers: ["Geofencing", "VPN", "Antivirus", "Encryption"],
        correct: 0,
        explanation: "Geofencing is a security measure that involves creating a virtual boundary around a specific physical area. It tracks assets within this area and sends alerts if they move outside the defined boundary, helping to prevent unauthorized movement or theft."
    },
    {
        question: "What technology is used for location tracking?",
        answers: ["USB", "ISP", "Modem", "GPS"],
        correct: 3,
        explanation: "GPS (Global Positioning System) is a technology specifically designed to determine the geographical location of a device."
    },
    {
        question: "If you want suggestions about local restaurants, what needs to be enabled in your browser?",
        answers: ["Browser Cache", "Browser Extensions", "Location Tracking", "Incognito Mode"],
        correct: 2,
        explanation: "Location Tracking, or Location Services, needs to be enabled for your browser to access your geographical location and provide suggestions for local restaurants and other nearby services."
    },
    {
        question: "What is accounting in the context of computer systems?",
        answers: ["The process of calculating financial transactions", "The process of documenting user actions on the computer system", "The process of managing network connections", "The process of optimizing computer performance."],
        correct: 1,
        explanation: "Accounting in computer systems involves documenting user actions such as sign-on attempts, software use, and file modifications."
    },
    {
        question: "What is social engineering?",
        answers: ["A type of cyberattack that uses complex softare to hack systems", "A method of deceiving others to share personal or sensitive information", "A way to build social networks online", "A technique used to improve social skills"],
        correct: 1,
        explanation: "Social engineering involves using deception to trick people into revealing confidential information."
    },
    {
        question: "Why should you be careful with friend requests on social media?",
        answers: ["Because they could be fake profiles created by hackers", "Because you might get too many notifications", "Because they might not like your posts", "Because they could be trying to sell you something"],
        correct: 0,
        explanation: "Hackers often create fake profiles to trick people into sharing personal details that can be used for malicious purposes."
    },
    {
        question: "What is a lunchtime attack?",
        answers: ["A type of cyber attack that targets lunch delivery services", "An attack that happens during lunch breaks when devices are left unattended", "A type of cyber attack that occurs at noon", "A method of hacking into food-ordering apps"],
        correct: 1,
        explanation: "Lunchtime attacks occur when devices are left unattended during breaks, such as lunchtime, allowing attackers to gain unauthorized access."
    },
    {
        question: "Why is shoulder surfing a security risk?",
        answers: ["Because it can distract you from your work", "Because it can make your computer run slower", "Because it can cause eye strain", "Because it allows someone to steal sensitive information"],
        correct: 3,
        explanation: "Shoulder surfing is a security risk because it allows someone to steal your sensitive information, such as passwords or PINs, by observing your screen. This can lead to unauthorized access to your accounts and personal data."
    },
    {
        question: "What is the purpose of a security vestibule in preventing tailgating?",
        answers: ["To allow only one person to enter at a time with proper credentials", "To provide a place for employees to sign in",  "To store security equipment", "To provide a location for a security guard to view everyone entering"],
        correct: 0,
        explanation: "A security vestibule allows only one person to enter at a time with proper credentials, preventing tailgating by ensuring that each person entering has been authenticated."
    },
    {
        question: "What is a common feature of a counterfeit website used in phishing attacks?",
        answers: ["It has a unique design",  "It contains no images", "It uses a well-known business logo", "It has no login option"],
        correct: 2,
        explanation: "Phishing sites often use familiar logos to appear legitimate."
    },
    {
        question: "Which of the following is a sign of a potentially fake email?",
        answers: ["The email has a professional tone", "The emain contains spelling or grammar mistakes", "The email addresses you by name", "The email is from a known company."],
        correct: 1,
        explanation: "Phishing emails often contain spelling errors and grammar mistakes."
    },
    {
        question: "What should you do if you receive an email that seems to be from a friend but looks suspicious?",
        answers: ["Click on all the links in the email", "Call your friend to verify if they sent it", "Forward the email to everyone", "Delete the email immediately"],
        correct: 1,
        explanation: "Calling your friend to verify if they sent the email helps confirm its legitimacy and avoid falling for a phishing scam."
    },
    {
        question: "What is the main goal of phishing and smishing attacks?",
        answers: ["To infect a computer with a virus", "To access unattended devices", "To gain physical access to a secure area", "To steal confidential information"],
        correct: 3,
        explanation: "Phishing and smishing attacks aim to trick users into providing sensitive data like bank account numbers and passwords."
    },
    {
        question: "Why is it dangerous if someone gets access to your primary email account?",
        answers: ["They can read your emails", "They can change passwords for other accounts", "They can send emails to your contacts", "They can delete your emails"],
        correct: 1,
        explanation: "Access to your primary email allows them to reset passwords for other accounts."
    },
    {
        question: "What is spear-phishing?",
        answers: ["A type of phishing that targets specific individuals", "A method to gather general information", "A way to send emails to large groups", "A technique to spread malware"],
        correct: 0,
        explanation: "Spear-phishing is a targeted form of phishing aimed at specific individuals, often using personal information to make the attack more convincing."
    },
    {
        question: "You receive a text message claiming to be from your phone service provider, warning you about unauthorized activity on your account. The message asks you to click on a link to verify your account details. What should you do?",
        answers: ["Click on the link and verify your account details", "Call the phone service provider using the number on their official website", "Reply to the text message asking for more information", "Ignore the message and do nothing."],
        correct: 1,
        explanation: "Calling the service provider using the official number ensures you are speaking to a legitimate representative. They can confirm if the information is valid."
    },
    {
        question: "What is smishing?",
        answers: ["A type of phishing done through SMS/text messages", "A technique to secure emails", "A method to send bulk emails", "A way to encrypt messages"],
        correct: 0,
        explanation: "Smishing involves sending deceptive SMS/text messages to steal information."
    },
    {
        question: "What is a virus in the context of computer malware?",
        answers: ["A type of software that requires an internet connection", "A type of malware that needs user action to spread", "A type of software that damages physical hardware components", "A type of software that only affects mobile devices"],
        correct: 1,
        explanation: "Viruses require user action, such as opening an infected file, to start spreading."
    },
    {
        question: "What is spyware?",
        answers: ["Software that records information about a PC and its users", "Software that monitors worms as they spread", "Software that installs backdoors on systems", "Software that allows you to track other people"],
        correct: 0,
        explanation: "Spyware is designed to monitor and record user activities, often without their consent."
    },
    {
        question: "How does a malware worm spread?",
        answers: ["By needing human intervention", "By replicating itself over a network", "By requiring an administrator login", "By USB drives only"],
        correct: 1,
        explanation: "Worms can replicate themselves and spread across networks without any human action."
    },
    {
        question: "Jamie noticed that his computer and several others in his school's computer lab started running very slowly and displaying strange messages at the same time. What type of malware is most likely responsible for this?",
        answers: ["Virus", "Spyware", "Ransomware", "Worm"],
        correct: 3,
        explanation: "A worm spreads over a network by itself and can infect multiple computers without human intervention."
    },
    {
        question: "What can happen if security tools are used incorrectly?",
        answers: ["They can make the network faster", "They can make administrators depend on them", "They can create more weaknesses", "They just don't work"],
        correct: 2,
        explanation: "When security tools are not used correctly, they can introduce vulnerabilities into the network. For example, a poorly configured firewall might allow unauthorized access, or misused encryption tools might fail to protect sensitive data."
    },
    {
        question: "What is the purpose of creating separate network segments?",
        answers: ["To simplify network administration", "To isolate sensitive information and systems", "To increase the number of users", "To allow separation of duties"],
        correct: 1,
        explanation: "Network segmentation involves dividing the network into smaller, isolated segments to protect sensitive data and systems. By isolating these areas, segmentation helps prevent unauthorized access and enhances overall network security."
    },
    {
        question: "What can happen if people rely too much on automated security tools?",
        answers: ["They will always catch every security threat", "They might miss subtle signs of a security breach", "The tools will stop working", "The network will become less secure"],
        correct: 1,
        explanation: "Automated tools are designed to handle many security tasks, but they may not catch every subtle or sophisticated threat. Human oversight is necessary to identify and respond to these nuanced issues."
    },
    {
        question: "What is 'separation of duties'?",
        answers: ["Distributing the work evenly between employees", "Using security tools in different parts of the network", "Splitting important multi-step tasks among different people", "Using various tools for location tracking"],
        correct: 2,
        explanation: "Separation of duties is a security principle that involves dividing tasks and responsibilities among multiple individuals to ensure that no single person has complete control over a critical process. This practice helps create checks and balances, reducing the risk of unethical behavior and errors."
    },
    {
        question: "What criteria does a simple firewall use besides source and destination?",
        answers: ["Speed", "Type of data", "Protocol", "Defense in depth level"],
        correct: 2,
        explanation: "Simple firewalls use the protocol as a criterion to filter data, in addition to source and destination."
    },
    {
        question: "Where are hardware firewalls typically installed?",
        answers: ["On individual computers", "In the cloud", "Between each of the servers", "At the edge of the network"],
        correct: 3,
        explanation: "Hardware firewalls are installed at the edge of the network to inspect all traffic passing through, providing a barrier between the internal network and external sources."
    },
    {
        question: "What should you avoid doing with firewall applications on your computer?",
        answers: ["Running two firewall applications at the same time", "Updating the firewall software", "Configuring firewall settings", "Using a firewall on public networks"],
        correct: 0,
        explanation: "Running two firewall applications simultaneously can cause conflicts and issues."
    },
    {
        question: "What is the primary function of a firewall?",
        answers: ["To increase internet speed", "To filter network traffic", "To store data", "To create network connections"],
        correct: 1,
        explanation: "The primary function of a firewall is to filter network traffic based on a set of rules."
    },
    {
        question: "What type of firewall is typically used to protect a single workstation or server?",
        answers: ["Software firewall", "Hardware firewall", "Cloud firewall", "Network firewall"],
        correct: 0,
        explanation: "Software firewalls are installed on individual workstations or servers to protect them."
    },
    {
        question: "What is a web application firewall used for?",
        answers: ["Protecting email servers", "Filtering and monitoring traffic between a web application and the Internet", "Preventing unauthorized access to a network", "Storing web application data"],
        correct: 1,
        explanation: "Web application firewalls protect web applications by filtering and monitoring traffic between the web application and the Internet."
    },
    {
        question: "What should you do if a virus spreads over a network?",
        answers: ["Shutdown your computer", "Install a second antivirus program", "Disconnect the network", "Wait for the next scheduled scan"],
        correct: 2,
        explanation: "Disconnecting the network can prevent the virus from spreading to other computers on the network."
    },
    {
        question: "What is a false positive in antivirus software?",
        answers: ["When the software fails to detect a virus", "When the software detects a virus that isn't actually harmful", "When the software slows down your computer", "When the software deletes a necessary system file"],
        correct: 1,
        explanation: "A false positive occurs when the antivirus software mistakenly identifies a safe file as a virus."
    },
    {
        question: "What is heuristic identification in antivirus software?",
        answers: ["Looking for actions or behaviors similar to what viruses do", "Using a list of known virus patterns", "Scanning files only when you manually start it", "Constantly updating virus definitions"],
        correct: 0,
        explanation: "Heuristic identification looks for suspicious behaviors that resemble those of viruses."
    },
    {
        question: "Which type of antivirus software protects many computers and is managed from a central server?",
        answers: ["Personal security suite", "Free antivirus software", "Mobile security app", "Network security suite"],
        correct: 3,
        explanation: "A network security suite protects many computers and is managed from a central server."
    },
    {
        question: "What is the primary function of antivirus software?",
        answers: ["To prevent unauthorized users", "To identify and stop harmful attacks on your computer or network", "To keep the operating system patched", "To monitor network traffic on a desktop"],
        correct: 1,
        explanation: "The primary function of antivirus software is to detect and prevent harmful attacks such as viruses and malware."
    },
    {
        question: "What is real-time scanning in antivirus software?",
        answers: ["Scanning all files when manually started", "Scanning when the computer is not being used", "Constantly watching your computer for threats", "Scanning the system during the system startup"],
        correct: 2,
        explanation: "Real-time scanning continuously monitors your computer for threats, checking files, programs, and processes as you use them."
    },
    {
        question: "What is patch management?",
        answers: ["A policy of updating only critical systems", "A process of installing new patches as soon as they are released", "A process to ensure computers run reliably and securely", "A way for users to install their own patches"],
        correct: 0,
        explanation: "Patch management is a comprehensive process that includes identifying, testing, and deploying software updates to ensure that computers and systems run reliably and securely. This process helps prevent vulnerabilities and ensures that the software is functioning correctly."
    },
    {
        question: "Why is it important to keep the operating system and application software current on patches?",
        answers: ["To improve compatibility with older hardware", "To improve security and functionality", "To help reduce costs", "To help speed up the network"],
        correct: 1,
        explanation: "Patches are primarily released to fix security vulnerabilities and improve the overall functionality of the software. Keeping software up to date ensures that it is protected against known threats and operates efficiently."
    },
    {
        question: "What is the main reason for testing patches before deploying them?",
        answers: ["To scan all of the files with an antivirus program", "To make sure the network runs faster", "To ensure they do not cause problems", "To make sure they don't leave extra files"],
        correct: 2,
        explanation: "The main reason for testing patches before deploying them is to ensure that they do not cause any problems. This includes checking for conflicts, bugs, or any issues that could disrupt the normal operation of the systems. Testing helps prevent potential issues that could arise from applying the patches."
    },
    {
        question: "What is a zero-day attack?",
        answers: ["An attack that happens on the first day of the month", "An attack that exploits an unknown vulnerability", "An attack that occurred every Patch Tuesday", "A harmless attack that generates annoying pop-ups"],
        correct: 1,
        explanation: "A zero-day attack is a type of cyber attack that takes advantage of a security vulnerability on the same day that the vulnerability becomes known to the vendor. Because the vendor has had zero days to address and patch the vulnerability, these attacks can be particularly dangerous."
    },
    {
        question: "How do computers use binary to represent information?",
        answers: ["By using combinations of digits 0 through 9", "By using combinations of only two values: 0 and 1", "By using combinations of letters A through F", "By using combinations of symbols and characters"],
        correct: 1,
        explanation: "Binary uses only 0 and 1."
    },
    {
        question: "What is the smallest unit of measure for a computer?",
        answers: ["Byte", "Kilobyte", "Bit", "Megabyte"],
        correct: 2,
        explanation: "A bit is the smallest unit of measure for a computer."
    },
    {
        question: "How many potential values can a single bit store?",
        answers: ["1", "2", "8", "256"],
        correct: 1,
        explanation: "A bit can store either 0 or a 1."
    },
    {
        question: "What does a byte represent in computing?",
        answers: ["A single value", "A group of 4 bits", "A group of 8 bits", "A group of 16 bits"],
        correct: 2,
        explanation: "A byte is made up of 8 bits."
    },
    {
        question: "What counting system do humans most commonly use?",
        answers: ["Binary", "Decimal", "Hexadecimal", "Octal"],
        correct: 1,
        explanation: "Humans use the decimal system, which includes digits 0 through 9."
    },
    {
        question: "What is the primary purpose of the ASCII format?",
        answers: ["To encode images in binary", "To represent characters such as letters, numbers, and symbols in binary", "To store large amounts of data", "To facilitate communication between different computer systems"],
        correct: 1,
        explanation: "The primary purpose of ASCII is to encode characters in a format that computers can understand and process."
    },
    {
        question: "What is the main limitation of the ASCII format?",
        answers: ["It can only represent numbers", "It is too complex to use", "It only supports 128 characters, primarily based on the English language", "It is incompatible with modern computers"],
        correct: 2,
        explanation: "The main limitation of ASCII is its limited character set, which is primarily based on the English language and does not include characters from other languages."
    },
    {
        question: "What's the maximum number a single byte can hold?",
        answers: ["100", "255", "1024", "128"],
        correct: 1,
        explanation: "A single byte (8 bits) can hold values from 0 to 255."
    },
    {
        question: "How many bytes are in a kilobyte?",
        answers: ["512", "100", "1024", "2048"],
        correct: 2,
        explanation: "A kilobyte is equal to 1024 bytes."
    },
    {
        question: "What does Unicode provide that ASCII does not?",
        answers: ["Support for only English characters", "Support for emojis", "Support for numbers", "Support for special characters"],
        correct: 1,
        explanation: "Unicode supports emojis, which ASCII does not."
    },
    {
        question: "Which of the following hexadecimal digits represents the decimal number 15?",
        answers: ["9", "A", "F", "10"],
        correct: 2,
        explanation: "In hexadecimal, F represents the decimal number 15."
    },
    {
        question: "What is the base of the hexadecimal numbering system?",
        answers: ["2", "8", "10", "16"],
        correct: 3,
        explanation: "The hexadecimal system is a base-16 numbering system."
    },
    {
        question: "How many bits does each hexadecimal digit represent in a network address?",
        answers: ["2", "4", "8", "16"],
        correct: 1,
        explanation: "Each hexadecimal digit represents 4 bits."
    },
    {
        question: "In computing, why is the hexadecimal system useful?",
        answers: ["It uses fewer digits to represent binary numbers", "It is easier to understand than decimal", "It is the same as the binary system", "It is used to represent file permissions in Linux."],
        correct: 0,
        explanation: "Hexadecimal is compact and uses fewer digits to represent binary numbers."
    },
    {
        question: "What numbering system uses the digits 0-7?",
        answers: ["Binary", "Decimal", "Octal", "Hexadecimal"],
        correct: 2,
        explanation: "The octal system uses the digits 0-7. It is a base-8 numbering system."
    },
    {
        question: "Which numbering system is used to represent file permissions in Linux?",
        answers: ["Binary", "Decimal", "Octal", "Hexadecimal"],
        correct: 2,
        explanation: "The octal system is used to represent file permissions in Linux."
    },
    {
        question: "Which of the following is an example of a network in daily life?",
        answers: ["Reading a book", "Using a debit or credit card at a store", "Walking in a park", "Cooking dinner"],
        correct: 1,
        explanation: "When you use a debit or credit card, the store's register connects to other computers through a network to check and update your balance."
    },
    {
        question: "What happens when you connect your mobile device to Bluetooth earbuds?",
        answers: ["You create a personal area network (PAN)", "You connect to the internet", "You start a video call", "You send an email"],
        correct: 0,
        explanation: "Connecting your mobile device to Bluetooth earbuds creates a personal area network (PAN), which is a short-range connection between personal devices."
    },
    {
        question: "What is the easiest way to add Wi-Fi to a desktop computer that doesn't have it built-in?",
        answers: ["Use a USB wireless adapter", "Replace the motherboard", "Because it allows someone to steal sensitive information", "Connect an Ethernet cable"],
        correct: 0,
        explanation: "A USB wireless adapter is an easy way to add Wi-Fi to a desktop computer."
    },
    {
        question: "Which type of cable is most commonly used in wired networks?",
        answers: ["Coaxial cable", "Ethernet cable", "Fiber optic cable", "USB cable"],
        correct: 1,
        explanation: "Ethernet cables are the most commonly used cables in wired networks."
    },
    {
        question: "Which computer component is NOT needed to share information on a network?",
        answers: ["Network media", "Network interface", "Network protocols", "Network storage"],
        correct: 3,
        explanation: "Network storage is used to store and retrieve data over a network, but it is not required for the basic sharing of information between computers on a network."
    },
    {
        question: "What do you call a group of computer systems connected to share information?",
        answers: ["A server", "A network", "A protocol", "A database"],
        correct: 1,
        explanation: "A network is the term used to describe a group of computer systems connected together to share information."
    },
    {
        question: "What is the definition of network media?",
        answers: ["The software that manages network connections", "The hardware that connects computers to a network", "The pathways that connect computers together to share information", "The rules that govern data exchange over a network"],
        correct: 2,
        explanation: "Network media are the physical or wireless pathways, such as cables or radio signals, that connect computers and allow them to share information."
    },
    {
        question: "What is a network interface card (NIC)?",
        answers: ["A type of network cable", "A device that connects a computer to a network", "A software program", "A type of wireless signal"],
        correct: 1,
        explanation: "A NIC is a hardware device that allows a computer to connect to a network."
    },
    {
        question: "What is the purpose of network protocols?",
        answers: ["To provide physical connections between computers", "To create a common set of rules for network communication", "To determine where shared information will be stored", "To set what wireless antennas will be used"],
        correct: 1,
        explanation: "Network protocols establish a common set of rules that ensure all computers on a network can communicate effectively and understand each other."
    },
    {
        question: "What does an RJ-45 plug connect to?",
        answers: ["A USB port", "A power outlet", "A network socket", "A monitor"],
        correct: 2,
        explanation: "RJ-45 plugs connect to network sockets for Ethernet connections."
    },
    {
        question: "What is port forwarding?",
        answers: ["A method to store data on a server", "A way to send network traffic to a new address", "A protocol for secure communication", "A technique to compress files"],
        correct: 1,
        explanation: "Port forwarding is like telling a letter carrier to send your mail to a new address if you're not at home. It directs network traffic to a new address."
    },
    {
        question: "Which port number is used for secure web communication?",
        answers: ["80", "110", "443", "25"],
        correct: 2,
        explanation: "Port 443 is used for Hypertext Transfer Protocol Secure (HTTPS), which establishes encrypted communication between clients and servers on the web."
    },
    {
        question: "Which port number is used for the Hypertext Transfer Protocol (HTTP)?",
        answers: ["80", "443", "21", "110"],
        correct: 0,
        explanation: "Port 80 is used for Hypertext Transfer Protocol (HTTP), which provides communication standards for clients and servers on the World Wide Web."
    },
    {
        question: "What is the term for unique numbers assigned to different types of network traffic?",
        answers: ["IP Addresses", "Network Ports", "Domain Names", "Protocols"],
        correct: 1,
        explanation: "Network ports are unique numbers that the operating system assigns to different types of network traffic. They help direct the information on a network to the correct destination, much like a postal code helps deliver mail to the right address."
    },
    {
        question: "Besides a network administrator, how can IP addresses be assigned?",
        answers: ["By the device manufacturer", "By the operating system", "By DHCP (Dynamic Host Configuration Protocol)", "By the MAC address"],
        correct: 2,
        explanation: "DHCP is a network management protocol used to dynamically assign IP addresses to devices on a network. This allows devices to join the network without needing manual configuration by a network administrator."
    },
    {
        question: "What format uses four sets of numbers with periods between them to represent an IP address?",
        answers: ["Hexadecimal notation", "Binary notation", "Dotted decimal notation", "Octal notation"],
        correct: 2,
        explanation: "Dotted decimal notation is the format that uses four sets of numbers separated by periods to represent an IP address. Each set, or octet, is a number between 0 and 255 (e.g., 192.168.1.1)."
    },
    {
        question: "How many sets of two hexadecimal numbers are in a MAC address?",
        answers: ["4", "5", "6", "8"],
        correct: 2,
        explanation: "A MAC address consists of six sets of two hexadecimal numbers."
    },
    {
        question: "How many bits are in an IPv4 address?",
        answers: ["16", "32", "64", "128"],
        correct: 1,
        explanation: "An IPv4 address is a 32-bit binary number."
    },
    {
        question: "What is the main reason for transitioning from IPv4 to IPv6?",
        answers: ["IPv4 is too slow", "IPv4 addresses are running out", "IPv4 is not secure", "IPv4 cannot be used on wireless networks."],
        correct: 1,
        explanation: "The main reason for transitioning to IPv6 is the exhaustion of available IPv4 addresses."
    },
    {
        question: "How many bits are in an IPv6 address?",
        answers: ["32", "64", "128", "256."],
        correct: 2,
        explanation: "An IPv6 address is 128 bits long, allowing for a vastly larger number of unique addresses compared to IPv4. This length is necessary to support the growing number of devices connected to the internet."
    },
    {
        question: "Which of the following is a characteristic of logical addresses?",
        answers: ["They are hardcoded into the device", "They can be changed by software", "They are always 48 bits long", "They are assigned by the device manufacturer"],
        correct: 1,
        explanation: "Logical addresses, like IP addresses, can be assigned, modified, and managed by software. This flexibility allows for dynamic addressing and reconfiguration of network settings."
    },
    {
        question: "What is a MAC address?",
        answers: ["A type of IP address with a port", "A unique hexadecimal number hardcoded in a device", "A logical address assigned by software", "An IPv6 address"],
        correct: 1,
        explanation: "A MAC address is a unique identifier assigned to network interfaces for communications on the physical network segment. It is a hexadecimal number that is hardcoded into the device by the manufacturer."
    },
    {
        question: "Which of the following is a characteristic of a physical address?",
        answers: ["It can be changed by software", "It is assigned by the device manufacturer", "It is always 32 bits long", "It is used to route data on the internet"],
        correct: 1,
        explanation: "A physical address, like a MAC address, is assigned by the device manufacturer and is unique to each network interface. This ensures that no two devices have the same physical address."
    },
    {
        question: "In a client-server model, what role does the server play?",
        answers: ["It requests information and resources", "It fulfills client requests", "It only consumes resources", "It is always offline"],
        correct: 0,
        explanation: "The server's role is to provide resources and information requested by the client."
    },
    {
        question: "What is a peer-to-peer relationship in networking?",
        answers: ["One computer requests and another responds", "Both computers can request and provide resources", "Only one computer is powerful", "It requires a central server"],
        correct: 1,
        explanation: "In a peer-to-peer model, both computers can act as clients and servers."
    },
    {
        question: "What device is commonly used to connect computers in a LAN?",
        answers: ["Router", "Switch", "Modem", "Firewall"],
        correct: 1,
        explanation: "A switch is used to connect multiple computers within a LAN."
    },
    {
        question: "What is the role of a firewall in a LAN?",
        answers: ["To connect multiple computers", "To manage the internet connection", "To block unauthorized access", "To increase network speed"],
        correct: 2,
        explanation: "Firewalls are used to enhance security by blocking unauthorized access."
    },
    {
        question: "What is an intranet?",
        answers: ["A global network accessible to everyone", "A private LAN for a company or organization", "A type of Internet service provider", "A device used to connect to the Internet"],
        correct: 1,
        explanation: "An intranet is a private network accessible only to an organization's staff."
    },
    {
        question: "What does LAN stand for?",
        answers: ["Large Area Network", "Long Area Network", "Limited Area Network", "Local Area Network"],
        correct: 3,
        explanation: "A Local Area Network (LAN) connects computers and devices in a limited area, such as a home, school, or office building."
    },
    {
        question: "Which of the following best describes a Wide Area Network (WAN)?",
        answers: ["A network that connects devices within a single building", "A network that spans a large geographical area, often connecting multiple smaller networks", "A network that is limited to a single city", "A network that only connects personal devices like smartphones and tablets"],
        correct: 1,
        explanation: "A Wide Area Network (WAN) covers a large geographical area and connects multiple smaller networks, such as LANs, across cities, countries, or even globally."
    },

];  