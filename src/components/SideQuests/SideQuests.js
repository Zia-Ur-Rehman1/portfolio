import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight, FiBriefcase, FiLock, FiPlus } from 'react-icons/fi';
import { GiAnvil, GiCheckedShield, GiCrossedSwords, GiWizardStaff } from 'react-icons/gi';
import {
  Arcs,
  Classes,
  EarlyArcs,
  Games,
  QuestLog,
  StatusWindow,
  Watchlist,
  WATCHLIST_SLOTS,
} from '../../constants/sideQuests';
import {
  Block,
  BlockHead,
  CardGrid,
  CardLinks,
  CardNote,
  CardText,
  CardTitle,
  CardTop,
  ClassCard,
  ClassGrid,
  ClassHead,
  ClassIcon,
  ClassTop,
  Cta,
  Divider,
  Hero,
  HeroText,
  InfoGrid,
  Log,
  MainTag,
  ModeToggle,
  Outro,
  Page,
  PageBackground,
  Petals,
  Pips,
  Player,
  QuestCard,
  Rank,
  StatRow,
  StatusChip,
  Tags,
  TopBar,
  TopNav,
  WatchBadge,
  WatchInfo,
  WatchGrid,
  WatchSlot,
  Window,
  WindowFooter,
  WindowTitle,
} from './SideQuestsStyles';

const CLASS_ICONS = { mage: GiWizardStaff, knight: GiCheckedShield, blacksmith: GiAnvil };

const STATUS_LABEL = { cleared: 'Cleared', active: 'In progress', locked: 'Locked', played: 'Played' };

// Fixed values so server and client render the same petals
const PETALS = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  delay: `${(i * 1.7) % 12}s`,
  duration: `${11 + ((i * 3) % 9)}s`,
  scale: 0.6 + ((i * 7) % 5) / 10,
}));

const QuestGrid = ({ quests }) => (
  <CardGrid>
    {quests.map((quest) => {
      const locked = quest.status === 'locked';
      return (
        <QuestCard key={quest.title} $status={quest.status}>
          <CardTop>
            <StatusChip $status={quest.status}>{STATUS_LABEL[quest.status]}</StatusChip>
            {quest.year && <span>{quest.year}</span>}
            {locked && <FiLock aria-hidden="true" />}
          </CardTop>
          <CardTitle $locked={locked}>{quest.title}</CardTitle>
          <CardText>{quest.description}</CardText>
          {quest.note && <CardNote>{quest.note}</CardNote>}
          {quest.tags.length > 0 && (
            <Tags aria-label="Built with">
              {quest.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </Tags>
          )}
          {quest.links.length > 0 && (
            <CardLinks>
              {quest.links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} <FiArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </CardLinks>
          )}
        </QuestCard>
      );
    })}
  </CardGrid>
);

const SideQuests = () => {
  const cleared = [...Games, ...Arcs, ...EarlyArcs].filter((q) => q.status === 'cleared').length;
  const emptySlots = Math.max(WATCHLIST_SLOTS - Watchlist.length, 0);

  return (
    <>
      <PageBackground />
      <Petals aria-hidden="true">
        {PETALS.map((p, i) => (
          <span
            key={i}
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              transform: `scale(${p.scale})`,
            }}
          />
        ))}
      </Petals>

      <Page>
        <TopBar>
          <Player href="#top">
            <i aria-hidden="true" />
            <span>Player ·</span> Zia
          </Player>
          <TopNav aria-label="Side Quests sections">
            <a href="#log">Quest log</a>
            <a href="#games">Games</a>
            <a href="#arcs">Arcs</a>
            <a href="#early-arcs">Early arcs</a>
            <a href="#watchlist">Watchlist</a>
          </TopNav>
          <ModeToggle role="group" aria-label="Switch site mode">
            <Link href="/" passHref legacyBehavior>
              <a>
                <FiBriefcase aria-hidden="true" /> Work
              </a>
            </Link>
            <a href="#top" aria-current="page">
              <GiCrossedSwords aria-hidden="true" /> Side Quests
            </a>
          </ModeToggle>
        </TopBar>

        <main id="top">
          <Hero>
            <HeroText id="log">
              <BlockHead>
                <p>01 / Quest log</p>
                <h2>How the story goes</h2>
              </BlockHead>
              <Log>
                {QuestLog.map((entry) => (
                  <li key={entry.label}>
                    <b>{entry.label}</b>
                    <div>
                      {entry.title && <strong>{entry.title}</strong>}
                      {entry.text}
                    </div>
                  </li>
                ))}
              </Log>
            </HeroText>

            <Window aria-label="Status window">
              <WindowTitle>
                <span>STATUS</span>
              </WindowTitle>
              <InfoGrid>
                <dt>Name</dt>
                <dd>{StatusWindow.name}</dd>
                <dt>Class</dt>
                <dd>
                  {StatusWindow.className} · <em>Lv. {StatusWindow.level}</em>
                </dd>
                <dt>XP</dt>
                <dd>{StatusWindow.xpLabel}</dd>
                <dt>Title</dt>
                <dd>{StatusWindow.title}</dd>
                <dt>Region</dt>
                <dd>{StatusWindow.location}</dd>
                <dt>Main game</dt>
                <dd>{StatusWindow.mainGame}</dd>
              </InfoGrid>
              <Divider />
              {StatusWindow.stats.map((stat) => (
                <StatRow key={stat.label}>
                  <span>{stat.label}</span>
                  <Pips aria-label={`${stat.value} out of 5`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <i key={n} data-on={n <= stat.value} />
                    ))}
                  </Pips>
                </StatRow>
              ))}
              <WindowFooter>
                Special skill: <b>{StatusWindow.special}</b> · Quests cleared: <b>{cleared}</b>
              </WindowFooter>
            </Window>
          </Hero>

          <Block id="classes">
            <ClassHead>Class mastery</ClassHead>
            <ClassGrid>
              {Classes.map((cls) => {
                const Icon = CLASS_ICONS[cls.icon];
                return (
                  <ClassCard key={cls.name} $main={cls.main}>
                    <ClassTop>
                      <ClassIcon aria-hidden="true">
                        <Icon />
                      </ClassIcon>
                      <div>
                        <h3>
                          {cls.name} <span>· {cls.world}</span>
                        </h3>
                        <Rank $level={cls.level}>{cls.rank}</Rank>
                      </div>
                      {cls.main && <MainTag>Main class</MainTag>}
                    </ClassTop>
                    <Pips aria-label={`${cls.level} out of 5`}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <i key={n} data-on={n <= cls.level} />
                      ))}
                    </Pips>
                    <CardText>{cls.lore}</CardText>
                    <Tags aria-label={`${cls.world} skills`}>
                      {cls.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </Tags>
                  </ClassCard>
                );
              })}
            </ClassGrid>
          </Block>

          <Block id="games">
            <BlockHead>
              <p>02 / Games</p>
              <h2>
                Mini-games <span>&amp;</span> boss fights
              </h2>
              <small>Games I have built, the one I played for years, and more on the way.</small>
            </BlockHead>
            <QuestGrid quests={Games} />
          </Block>

          <Block id="arcs">
            <BlockHead>
              <p>03 / Current arcs</p>
              <h2>Experiments</h2>
              <small>New tech I am learning by building something real with it.</small>
            </BlockHead>
            <QuestGrid quests={Arcs} />
          </Block>

          <Block id="early-arcs">
            <BlockHead>
              <p>04 / Early arcs</p>
              <h2>Hardware &amp; ML</h2>
              <small>Where the curiosity started: robots, vision models and evolving algorithms.</small>
            </BlockHead>
            <QuestGrid quests={EarlyArcs} />
          </Block>

          <Block id="watchlist">
            <BlockHead>
              <p>05 / Watchlist</p>
              <h2>
                Currently <span>watching</span>
              </h2>
              <small>The anime keeping me company between builds.</small>
            </BlockHead>
            <WatchGrid>
              {Watchlist.map((show) => (
                <WatchSlot key={show.title} $filled $poster={Boolean(show.image)}>
                  {show.image && (
                    <img
                      src={show.image}
                      alt={`${show.title} cover art`}
                      loading="lazy"
                      style={show.imagePosition ? { objectPosition: show.imagePosition } : undefined}
                    />
                  )}
                  {show.badge && <WatchBadge>★ {show.badge}</WatchBadge>}
                  <WatchInfo>
                    <span>{show.genre}</span>
                    <strong>
                      {show.link ? (
                        <a href={show.link} target="_blank" rel="noopener noreferrer">
                          {show.title}
                        </a>
                      ) : (
                        show.title
                      )}
                    </strong>
                    {show.note && <p>{show.note}</p>}
                  </WatchInfo>
                </WatchSlot>
              ))}
              {Array.from({ length: emptySlots }, (_, i) => (
                <WatchSlot key={`slot-${i}`}>
                  <FiPlus aria-hidden="true" />
                  <span>Slot unlocked · coming soon</span>
                </WatchSlot>
              ))}
            </WatchGrid>
          </Block>

          <Outro>
            <p>Main quest still needs a party member? I take on real work too.</p>
            <Link href="/" passHref legacyBehavior>
              <Cta>
                <FiBriefcase aria-hidden="true" /> Back to Work mode
              </Cta>
            </Link>
          </Outro>
        </main>
      </Page>
    </>
  );
};

export default SideQuests;
