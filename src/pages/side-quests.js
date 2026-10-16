import SEO from '../components/SEO/SEO';
import SideQuests from '../components/SideQuests/SideQuests';

const SideQuestsPage = () => (
  <>
    <SEO
      title="Side Quests"
      description="What Zia Ur Rehman builds off the clock: games, AI agents, automation experiments and hardware projects."
      path="/side-quests/"
    />
    <SideQuests />
  </>
);

export default SideQuestsPage;
