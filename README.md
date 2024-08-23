
# WorkoutLogger App

Welcome to the WorkoutLogger app! This project is built on Salesforce technology and offers both web and mobile interfaces to help users track their fitness progress efficiently. With the WorkoutLogger app, users can log workouts, monitor progress over time, and stay motivated to achieve their fitness goals.

## Features

### Core Features
- **Aura Components:** The app leverages Salesforce's Aura Components to create dynamic and responsive user interfaces.
- **Process Automation:** WorkoutLogger uses Flows for automated workflow actions, ensuring seamless data management.
- **Apex Controllers:** Custom Apex code manages the business logic, providing robust backend operations.
- **Custom Objects:** Workouts and progress are stored in Salesforce as custom objects, allowing for a flexible and scalable data structure.
- **Master-Detail Relationships:** Relationships between objects are established using master-detail fields for easy roll-up summary calculations.
- **Experience Cloud:** The app is accessible through Salesforce Experience Cloud, allowing external users to interact with the app via a branded community.

## Technologies Used
- **Frontend:** Aura Components
- **Backend:** Apex (custom logic)
- **Database:** Salesforce Custom Objects
- **Automation:** Salesforce Flows
- **Deployment:** Salesforce Experience Cloud for web and mobile access

## Installation

Since the WorkoutLogger app is built on Salesforce, follow these steps to set up and deploy the app:

### Prerequisites
- Salesforce Developer Org with My Domain enabled
- Experience in Salesforce Aura, Apex, and Process Builder

### Installation Steps
1. **Clone the repository:**
2. **Deploy to Salesforce:**
   - Use Salesforce CLI or your preferred deployment tool (e.g., Change Sets, Unlocked Packages).
   - Ensure that all custom objects, fields, and relationships are properly configured.
   - Deploy Aura components and Apex classes to your Salesforce org.
3. **Set Up Experience Cloud:**
   - Create a new Experience Site and configure it to use the deployed Aura components.
   - Customize the site for your branding needs and activate it for your users.
4. **Configure Flows:**
   - Set up Flows to automate workout logging processes and notifications.

## Screenshots

Here are some screenshots of the app in action:

- **Apex Screenshot**:  
  ![Apex Screenshot](SalesforceWorkoutLoggerApp/Apex-Screenshot1.png)

- **Lightning Component Screenshots**:  
  ![Lightning Component Screenshot1](SalesforceWorkoutLoggerApp/LightningComponent-Screenshot1.png)  
  ![Lightning Component Screenshot2](SalesforceWorkoutLoggerApp/LightningComponent-Screenshot2.png)  
  ![Lightning Component Screenshot3](SalesforceWorkoutLoggerApp/LightningComponent-Screenshot3.png)  
  ![Lightning Component Screenshot4](SalesforceWorkoutLoggerApp/LightningComponent-Screenshot4.png)

- **Mobile Screenshots**:  
  ![Mobile Screenshot1](SalesforceWorkoutLoggerApp/Mobile-Screenshot1.png)  
  ![Mobile Screenshot2](SalesforceWorkoutLoggerApp/Mobile-Screenshot2.png)  
  ![Mobile Screenshot3](SalesforceWorkoutLoggerApp/Mobile-Screenshot3.png)

- **Web Screenshots**:  
  ![Web Screenshot1](SalesforceWorkoutLoggerApp/Web-Screenshot1.png)  
  ![Web Screenshot2](SalesforceWorkoutLoggerApp/Web-Screenshot2.png)  
  ![Web Screenshot3](SalesforceWorkoutLoggerApp/Web-Screenshot3.png)  
  ![Web Screenshot4](SalesforceWorkoutLoggerApp/Web-Screenshot4.png)

## Contributing
We welcome contributions! If you'd like to contribute, feel free to submit issues or pull requests for improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
