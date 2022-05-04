import ContactUserCard from "./ContactUserCard";

const Contacts = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <ol>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </ol>
    </div>
  );
};

export default Contacts;
