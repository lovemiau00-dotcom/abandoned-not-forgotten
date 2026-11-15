const MISSIONS = [
  {
    id: "apollo-11-lrrr",
    planet: "moon",
    name: "Apollo 11 — Уголковый отражатель (LRRR)",
    shortName: "Apollo 11",
    year: "1969",
    coords: "0.67416° N, 23.47314° E (Море Спокойствия)",
    x: 62,
    y: 48,
    category: "active-science",
    categoryLabel: "Действующий научный инструмент",
    status: "Активен спустя 55+ лет (не требует электропитания)",
    image: "https://images-assets.nasa.gov/image/as11-40-5952/as11-40-5952~medium.jpg",
    purpose: "Массив из 100 кварцевых призм, оставленный экипажем Аполлона-11 для отражения лазерных импульсов с Земли.",
    whatHappened: "После отлёта взлётной ступени отражатель остался на поверхности. В отличие от электроники, оптические призмы не имеют срока годности.",
    scientificValue: "Позволил установить, что Луна удаляется от Земли на 3,8 см в год, проверить Общую теорию относительности и доказать наличие жидкого ядра у Луны.",
    futureContribution: "Используется как точный геодезический маяк для навигации будущих посадочных модулей программы Artemis."
  },
  {
    id: "surveyor-3",
    planet: "moon",
    name: "Surveyor 3 (и визит Apollo 12)",
    shortName: "Surveyor 3",
    year: "1967 / 1969",
    coords: "3.01239° S, 23.42157° W (Океан Бурь)",
    x: 34,
    y: 56,
    category: "engineering",
    categoryLabel: "Инженерный урок для будущего",
    status: "Частично демонтирован астронавтами Apollo 12",
    image: "https://images-assets.nasa.gov/image/as12-48-7136/as12-48-7136~medium.jpg",
    purpose: "Автоматический зонд для проверки прочности лунного грунта перед высадкой людей.",
    whatHappened: "Простоял на Луне 2,5 года, после чего астронавты Apollo 12 сели в 160 метрах от него, сняли телекамеру и грунтозаборник и вернули их на Землю.",
    scientificValue: "Первый в истории «полевой эксперимент» по влиянию длительного вакуума, радиации и микрометеоритов на земные материалы.",
    futureContribution: "Данные о деградации краски, кабелей и оптики легли в основу стандартов защиты лунных баз и скафандров нового поколения."
  },
  {
    id: "apollo-17-roving",
    planet: "moon",
    name: "Apollo 17 — Лунный ровер (LRV-3)",
    shortName: "Apollo 17 LRV",
    year: "1972",
    coords: "20.1908° N, 30.7717° E (Долина Таурус-Литтров)",
    x: 68,
    y: 31,
    category: "calibration",
    categoryLabel: "Опорная точка и картография",
    status: "Припаркован в 145 м от посадочной ступени Challenger",
    image: "https://images-assets.nasa.gov/image/as17-146-22367/as17-146-22367~medium.jpg",
    purpose: "Электромобиль для расширения радиуса геологических исследований астронавтов (проехал 35,9 км).",
    whatHappened: "Перед стартом ровер припарковали так, чтобы его телекамера с дистанционным управлением с Земли засняла взлёт лунного модуля.",
    scientificValue: "Следы колёс LRV-3 до сих пор видны на снимках орбитального аппарата LRO — по ним учёные изучают скорость разрушения реголита.",
    futureContribution: "Опыт работы подвески и сетчатых колёс в лунной пыли напрямую используется при создании роверов Lunar Terrain Vehicle (LTV)."
  },
  {
    id: "opportunity",
    planet: "mars",
    name: "Марсоход Opportunity (MER-B)",
    shortName: "Opportunity",
    year: "2004–2018",
    coords: "1.9462° S, 354.4734° E (Плато Меридиана)",
    x: 46,
    y: 52,
    category: "calibration",
    categoryLabel: "Опорная точка и картография",
    status: "Связь потеряна после глобальной пылевой бури (2018)",
    image: "https://images-assets.nasa.gov/image/PIA06739/PIA06739~medium.jpg",
    purpose: "Геологический поиск следов жидкой воды в прошлом Марса. Рассчитан на 90 солов, проработал почти 15 лет (45,16 км).",
    whatHappened: "В июне 2018 года мощнейшая пылевая буря закрыла Солнце; батареи разрядились, и ровер не смог выйти из спящего режима.",
    scientificValue: "Обнаружил минерал гематит («чернику») и глинистые породы, доказав существование пресной воды на древнем Марсе.",
    futureContribution: "Его маршрут и орбитальные снимки используются для тренировки алгоритмов автономной навигации будущих роверов и изучения пылевых бурь."
  },
  {
    id: "insight",
    planet: "mars",
    name: "Посадочный модуль InSight",
    shortName: "InSight",
    year: "2018–2022",
    coords: "4.5024° N, 135.6234° E (Нагорье Элизий)",
    x: 74,
    y: 45,
    category: "active-science",
    categoryLabel: "Действующий научный инструмент",
    status: "Завершил работу из-за запыления панелей; объект наблюдения с орбиты",
    image: "https://images-assets.nasa.gov/image/PIA22743/PIA22743~medium.jpg",
    purpose: "Первая геофизическая станция для изучения внутреннего строения Марса с помощью сверхчувствительного сейсмометра SEIS.",
    whatHappened: "За 4 года зафиксировал более 1300 марсотрясений. В декабре 2022 года слой марсианской пыли полностью перекрыл солнечные батареи.",
    scientificValue: "Впервые измерил толщину коры Марса, размеры его жидкого металлического ядра и доказал, что планета сейсмически активна.",
    futureContribution: "Орбитальный зонд MRO регулярно снимает запылённые панели InSight, чтобы точно измерять скорость оседания пыли — критический параметр для будущих энергосистем."
  },
  {
    id: "viking-1",
    planet: "mars",
    name: "Viking 1 Lander (Мемориальная станция Томаса Матча)",
    shortName: "Viking 1",
    year: "1976–1982",
    coords: "22.697° N, 311.978° E (Равнина Хриса)",
    x: 33,
    y: 34,
    category: "engineering",
    categoryLabel: "Инженерный урок для будущего",
    status: "Первый успешный аппарат на Марсе (проработал 6 лет)",
    image: "https://images-assets.nasa.gov/image/PIA00393/PIA00393~medium.jpg",
    purpose: "Поиск биосигнатур в марсианском грунте и мониторинг климата.",
    whatHappened: "Отключился в ноябре 1982 года из-за ошибочной команды с Земли при обновлении программного обеспечения, повредившей ориентацию антенны.",
    scientificValue: "Собрал многолетнюю метеорологическую базу данных Марса и помог определить состав его атмосферы.",
    futureContribution: "Служит ключевой геодезической реперной точкой в системе координат Марса и примером отказоустойчивого ПО для дальнего космоса."
  }
];

const QUIZ_DATA = [
  {
    question: "Какой прибор, оставленный на Луне в 1969 году, до сих пор активно используется учёными без батареек и электроники?",
    options: [
      "Сейсмометр миссии Surveyor 3",
      "Лазерный уголковый отражатель (LRRR) миссии Apollo 11",
      "Телекамера лунного ровера Apollo 17"
    ],
    correctIndex: 1,
    explanation: "Уголковый отражатель состоит из кварцевых призм: он возвращает лазерный луч с Земли строго в обратном направлении, позволяя измерять расстояние до Луны с миллиметровой точностью."
  },
  {
    question: "Зачем орбитальный аппарат NASA MRO продолжает фотографировать уже отключившийся модуль InSight на Марсе?",
    options: [
      "Чтобы по слою пыли на его солнечных панелях измерять скорость оседания марсианской пыли",
      "Чтобы попытаться перезагрузить его радиосигналом",
      "Чтобы подготовить его к возвращению на Землю"
    ],
    correctIndex: 0,
    explanation: "Изменение цвета и яркости солнечных панелей InSight помогает планетологам моделировать пылевой цикл Марса и рассчитывать ресурс энергии для будущих миссий."
  },
  {
    question: "Какую уникальную научную пользу принёс визит астронавтов Apollo 12 к старому зонду Surveyor 3?",
    options: [
      "Они заправили зонд топливом для нового полёта",
      "Они вернули детали зонда на Землю, чтобы изучить влияние 2,5 лет космоса на материалы",
      "Они использовали его двигатель для взлёта"
    ],
    correctIndex: 1,
    explanation: "Возвращённые детали Surveyor 3 стали первым в истории реальным тестом того, как вакуум, радиация и микрометеориты разрушают технику на Луне."
  }
];

let currentPlanet = "moon";
let currentCategory = "all";
let selectedMissionId = MISSIONS[0].id;
let quizIndex = 0;

const surfaceMap = document.getElementById("surfaceMap");
const mapTitle = document.getElementById("mapTitle");
const detailPanel = document.getElementById("detailPanel");
const legacyFilter = document.getElementById("legacyFilter");
const planetButtons = document.querySelectorAll(".planet-btn");

function getFilteredMissions() {
  return MISSIONS.filter((m) => {
    const planetMatch = m.planet === currentPlanet;
    const catMatch = currentCategory === "all" || m.category === currentCategory;
    return planetMatch && catMatch;
  });
}

function renderMap() {
  surfaceMap.className = `surface-map ${currentPlanet}-bg`;
  mapTitle.textContent = `Карта мест посадки: ${currentPlanet === "moon" ? "Луна" : "Марс"}`;
  surfaceMap.innerHTML = "";

  const visibleMissions = getFilteredMissions();

  if (visibleMissions.length === 0) {
    surfaceMap.innerHTML = `<div style="padding:20px;color:#fff;">Нет объектов в выбранной категории для этой планеты.</div>`;
    detailPanel.innerHTML = `<p>Выберите другую категорию научного наследия.</p>`;
    return;
  }

  if (!visibleMissions.some((m) => m.id === selectedMissionId)) {
    selectedMissionId = visibleMissions[0].id;
  }

  visibleMissions.forEach((mission) => {
    const btn = document.createElement("button");
    btn.className = `marker ${mission.category} ${mission.id === selectedMissionId ? "active" : ""}`;
    btn.style.left = `${mission.x}%`;
    btn.style.top = `${mission.y}%`;
    btn.setAttribute("data-short", mission.shortName);
    btn.setAttribute("aria-label", mission.name);

    btn.addEventListener("click", () => {
      selectedMissionId = mission.id;
      renderMap();
      renderDetails(mission);
    });

    surfaceMap.appendChild(btn);
  });

  const activeMission = visibleMissions.find((m) => m.id === selectedMissionId) || visibleMissions[0];
  renderDetails(activeMission);
}

function renderDetails(mission) {
  detailPanel.innerHTML = `
    <img class="detail-photo" src="${mission.image}" alt="${mission.name}" />
    <div class="detail-meta">
      <span class="tag">${mission.year}</span>
      <span class="tag">${mission.categoryLabel}</span>
    </div>
    <h3>${mission.name}</h3>
    <div class="coords">Координаты: ${mission.coords}</div>
    <p><strong>Текущий статус:</strong> ${mission.status}</p>

    <div class="detail-block">
      <h4>Для чего отправлялся</h4>
      <p>${mission.purpose}</p>
    </div>

    <div class="detail-block">
      <h4>Что произошло после завершения миссии</h4>
      <p>${mission.whatHappened}</p>
    </div>

    <div class="detail-block">
      <h4>Научные открытия</h4>
      <p>${mission.scientificValue}</p>
    </div>

    <div class="detail-block">
      <h4>Вклад в будущие исследования космоса</h4>
      <p>${mission.futureContribution}</p>
    </div>
  `;
}

planetButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    planetButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    currentPlanet = btn.dataset.planet;
    renderMap();
  });
});

legacyFilter.addEventListener("change", (e) => {
  currentCategory = e.target.value;
  renderMap();
});

// Логика научного квиза
function renderQuiz() {
  const container = document.getElementById("quizContainer");
  const item = QUIZ_DATA[quizIndex];

  container.innerHTML = `
    <div class="quiz-question">Вопрос ${quizIndex + 1} из ${QUIZ_DATA.length}: ${item.question}</div>
    <div class="quiz-options">
      ${item.options
        .map((opt, idx) => `<button class="quiz-opt" data-idx="${idx}">${opt}</button>`)
        .join("")}
    </div>
    <div id="quizFeedback" class="quiz-feedback"></div>
  `;

  const optButtons = container.querySelectorAll(".quiz-opt");
  optButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = Number(btn.dataset.idx);
      optButtons.forEach((b, i) => {
        b.disabled = true;
        if (i === item.correctIndex) b.classList.add("correct");
        if (i === chosen && chosen !== item.correctIndex) b.classList.add("wrong");
      });

      const feedback = document.getElementById("quizFeedback");
      feedback.innerHTML = `
        <p>${chosen === item.correctIndex ? "Верно!" : "Не совсем так."} ${item.explanation}</p>
        <button class="quiz-next" id="nextQuizBtn">
          ${quizIndex < QUIZ_DATA.length - 1 ? "Следующий вопрос" : "Пройти заново"}
        </button>
      `;

      document.getElementById("nextQuizBtn").addEventListener("click", () => {
        quizIndex = (quizIndex + 1) % QUIZ_DATA.length;
        renderQuiz();
      });
    });
  });
}

renderMap();
renderQuiz();
