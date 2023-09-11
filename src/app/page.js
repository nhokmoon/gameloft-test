import ExclusiveContent from "@/ui/ExclusiveContent";
import RegisterForm from "@/ui/authenticate/register";
import EventPromotion from "@/ui/event-promotion";
import Footer from "@/ui/footer";
import HostPostBanner from "@/ui/hostpost-banner";
import BottomStickyMenu from "@/ui/sticky-menu/bottom-sticky-menu";
import TopStickMenu from "@/ui/sticky-menu/top-sticky-menu";

const Home = () => {
  return (
    <div className="flex flex-col">
      <TopStickMenu />
      <BottomStickyMenu />
      <HostPostBanner />
      <RegisterForm />
      <EventPromotion />
      <ExclusiveContent />
      <Footer />
    </div>
  );
};

export default Home;
