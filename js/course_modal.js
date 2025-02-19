$(document).ready(function () {
  const courseContents = [
    {
      id: 1,
      title: "사회복지사 2급",
			step1Option: "자격증 취득",
      header: {
        image: "./images/curriculum/modal-socialworker.webp",
        tags: ["#자격증", "#사회복지사", "#학점은행제"],
      },
      introduction: {
        title: "사회복지사란?",
        contents:
          "사회복지사 2급은 사회적 돌봄이 필요한 계층을 지원하고, 복지 서비스를 향상하는 전문가 자격입니다. 국가 공인 자격으로, 사회복지 기관 및 공공기관 취업 시 필수 자격으로 인정받습니다.",
      },
      points: {
        course: "사회복지사 2급",
        qualifications: "전문대졸 이상의 학력, 사회복지 관련 17과목 이수",
        proceed: "온라인 수업 + 현장 실습",
      },
      cta: {
        buttonLabel: "사회복지사 2급 상담받기",
        info: "24시간 상담 가능 / 빠른 상담 신청 시 추가 혜택 제공",
      },
    },
    {
      id: 2,
      title: "국가기술자격증 응시자격",
			step1Option: "국가기술자격증 응시자격",
      header: {
        image: "./images/curriculum/modal-license.webp",
        tags: ["#기사", "#산업기사", "#국가기술"],
      },
      introduction: {
        title: "국가기술자격증이란?",
        contents:
          "국가기술자격증은 산업 현장에서 요구하는 실무 능력을 검증하는 국가 공인 자격입니다. 기술 분야에서 전문성을 갖추기 위해 필수적으로 요구되며, 취업 및 경력 개발에 큰 도움이 됩니다. 특히, 학점은행제를 통해 일정 학점을 취득하면 기사·산업기사 등의 응시자격을 갖출 수 있습니다.",
      },
      points: {
        course: "국가기술자격증 응시자격",
        qualifications:
          "기사 : 학점은행제 106학점, 산업기사 : 학점은행제 41학점",
        proceed: "온라인 수업",
      },
      cta: {
        buttonLabel: "국가기술자격증 상담받기",
        info: "자세한 상담은 무료로 진행됩니다.",
      },
    },
    {
      id: 3,
      title: "학위취득",
			step1Option: "학위취득",
      header: {
        image: "./images/curriculum/modal-graduate.webp",
        tags: ["#학사학위", "#전문학사학위", "#학점은행제"],
      },
      introduction: {
        title: "학위취득이란?",
        contents:
          "학위취득은 공식적인 학력을 인정받아 경력 개발 및 취업 경쟁력을 높이는 과정입니다. 학점은행제를 통해 전문학사(80학점), 학사(140학점) 취득이 가능하며, 기존 학습 이력을 활용해 효율적으로 학위를 취득할 수 있습니다. 특히, 편입·대학원 진학·공무원 응시 등 다양한 진로를 계획하는 분들에게 필수적인 과정입니다.",
      },
      points: {
        course: "학위취득",
        qualifications: "학사학위 : 140학점 / 전문학사학위 : 80학점",
        proceed: "온라인 수업",
      },
      cta: {
        buttonLabel: "학위취득 상담받기",
        info: "자세한 상담은 무료로 진행됩니다.",
      },
    },
    {
      id: 4,
      title: "대학원 입학",
			step1Option: "편입, 대학원, 대졸자전형",
      header: {
        image: "./images/curriculum/modal-graduateschool.webp",
        tags: ["#일반대학원", "#교육대학원", "#전문대학원"],
      },
      introduction: {
        title: "대학원을 진학하는 이유?",
        contents:
          "현재 우리 나라는 대학원 진학을 하는 비율이 굉장히 많이 늘어나고 있습니다. 공부 목적, 연구 목적 등 다양한 목적으로 진학을 하시겠지만, 대부분은 자신의 스펙과 학력 상승을 통해 원하는 곳으로의 취업을 위해 진학을 하고 있습니다.",
      },
      points: {
        course: "4년제 학위 취득 과정",
        qualifications: "(관련 전공의) 학사 학위",
        proceed: "온라인 수업",
      },
      cta: {
        buttonLabel: "대학원 입학 상담받기",
        info: "자세한 상담은 무료로 진행됩니다.",
      },
    },
    {
      id: 5,
      title: "편입",
			step1Option: "지거국, 인서울, 성적세탁",
      header: {
        image: "./images/curriculum/modal-transfer.webp",
        tags: ["#학사학위", "#전문학사학위", "#학점은행제"],
      },
      introduction: {
        title: "학점은행제로 편입을 준비하는 이유?",
        contents:
          "편입학이란 대학교의 3학년으로 중도 입학을 하는 입시 제도입니다. 3학년으로 입학을 하는 것이기 때문에 당연히 지원자격이 따로 존재하죠. 또한, 대부분의 대학교는 전적대 성적을 기본적으로 보고 있기 때문에 성적 세탁을 목적으로도 학점은행제로 준비를 하고 있기도 합니다!",
      },
      points: {
        course: "일반편입/학사편입 지원자격",
        qualifications: "일반편입 : 80학점 / 학사편입 : 140학점",
        proceed: "온라인 수업",
      },
      cta: {
        buttonLabel: "편입 상담받기",
        info: "자세한 상담은 무료로 진행됩니다.",
      },
    },
    {
      id: 6,
      title: "대졸자전형",
			step1Option: "편입, 대학원, 대졸자전형",
      header: {
        image: "./images/curriculum/modal-collegegraduation.webp",
        tags: ["#간호학과", "#물리치료학과"],
      },
      introduction: {
        title: "대졸자전형이란?",
        contents:
          "대학교 졸업자가 1학년으로 신입학하는 전형",
				title2: "대졸자전형이 인기가 많은 이유?",
				contents2: "간호학과, 물리치료학과로의 편입은 편입 시험 혹은 공인 영어를 따로 준비를 해야 합니다. 반면 대졸자전형은 대부분 전적대 성적(+면접)으로 모집을 하기 때문에 영어에 자신이 없다면 대졸자전형으로 준비를 하는 편이 유리합니다."
      },
      points: {
        course: "전문학사 학위 취득 과정",
        qualifications: "전문대 졸업자(예정자는 정시만)",
        proceed: "온라인 수업",
      },
      cta: {
        buttonLabel: "대졸자전형 상담받기",
        info: "자세한 상담은 무료로 진행됩니다.",
      },
    },
  ];

  // detail_btn 클릭 시 모달 열기
  $(".detail_btn").click(function () {
    const courseId = $(this).data("id");
    const courseContent = courseContents.find(
      (content) => content.id === courseId
    );

    if (courseContent) {
      const modalHTML = `
					<div class="course-modal-overlay">
						<div class="course-modal" data-id="${courseContent.id}">
							<div class="course-modal-header">
								<img src="${courseContent.header.image}" alt="${courseContent.title}" class="course-modal-image">
								<div class="course-modal-title-wrap">
									<h2 class="course-modal-title">
										${courseContent.title}
									</h2>
									<div class="course-modal-tags">
										${courseContent.header.tags.map((tag) => `<span class="tag">${tag}</span>`).join(" ")}
									</div>
								</div>
							</div>
							<div class="course-modal-section-wrap">
								<div class="course-modal-section">
									<h3 class="course-modal-section-title">
										<i>1</i>
										<strong>${courseContent.introduction.title}</strong>
									</h3>
									<p class="section-content">${courseContent.introduction.contents}</p>
									
									${courseContent.introduction.title2 && courseContent.introduction.contents2
										? `
										<h3 class="course-modal-section-title">
											<i>2</i>
											<strong>${courseContent.introduction.title2}</strong>
										</h3>
										<p class="section-content">${courseContent.introduction.contents2}</p>`
										: ""
									}
									<dl class="course-modal-lecture-info">
										<dt>교육과정</dt>
										<dd>${courseContent.points.course}</dd>
										<dt>자격요건</dt>
										<dd>${courseContent.points.qualifications}</dd>
										<dt>진행방식</dt>
										<dd>${courseContent.points.proceed}</dd>
									</dl>
								</div>
								<div class="course-modal-section">
									<h3 class="course-modal-section-title">
										<i>2</i>
										<strong>선생님 1:1 밀착 관리</strong>
									</h3>
									<ul class="course-modal-benefits-list">
										<li>
											<div class="img-box">
												<img src="./images/icon/icon-plan.png" alt="학습플랜 설계" class="benefits-icon">
											</div>
											<strong>학습자 니즈에 맞는 정확한 플랜</strong>
											<span>
												내가 원하는 과정에 맞는 플랜<br>
												전문 플래너를 통해 정확하게 상담 받아보세요!
											</span>
											</li>
											<li>
											<div class="img-box">
												<img src="./images/icon/icon-data.png" alt="학습플랜 설계" class="benefits-icon">
											</div>
											<strong>질 좋은 학습자료 제공</strong>
											<span>
												전문 플래너가 직접 선정한 핵심<br>
												학습자료로 꼼꼼하게 배워보세요!
											</span>
											</li>
											<li>
											<div class="img-box">
												<img src="./images/icon/icon-administration.png" alt="학습플랜 설계" class="benefits-icon">
											</div>
											<strong>복잡한 행정절차의 도움</strong>
											<span>
												전문 플래너가 행정 처리부터<br>
												학점 신청까지 모두 안내 받아보세요!
											</span>
											</li>
											<li>
											<div class="img-box">
												<img src="./images/icon/icon-feedback.png" alt="학습플랜 설계" class="benefits-icon">
											</div>
											<strong>1:1 학습 도움</strong>
											<span>
												막막한 시험과 과제는 전문 플래너에게<br>
												확실한 정보로 도움 받으며 진행해요!
											</span>
											</li>
											<li>
											<div class="img-box">
												<img src="./images/icon/icon-collabo.png" alt="학습플랜 설계" class="benefits-icon">
											</div>
											<strong>끝까지 책임지는 전담 멘토</strong>
											<span>
												무책임한 멘토는 이제 그만!<br>
												모든 과정의 마무리까지 함께 진행해요!
											</span>
											</li>
										</ul>
									</div>
								</div>
								<div class="modal-cta">
									<button class="course-btn submit-btn w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none transform hover:-translate-y-0.5 transition-all duration-200">${courseContent.cta.buttonLabel}</button>
									<p class="cta-info">${courseContent.cta.info}</p>
								</div>
							</div>
							<button type="button" class="close-course-modal">
								<i class="fa-solid fa-xmark"></i>
							</button>
							
						</div>
					</div>`;

      $("body").append(modalHTML);
      $(".course-modal-overlay").fadeIn();
      $("body").css("overflow", "hidden");
    }
  });

	$(document).on("click", ".course-btn", function () {
    // 현재 courseId 가져오기
    const courseId = $(this).closest(".course-modal").data("id");

    // courseContents에서 step1Value 찾기
    const courseContent = courseContents.find(content => content.id === courseId);
    const step1Option = courseContent ? courseContent.step1Option : null;

    if (step1Option && typeof window.selectStep1FromData === 'function') {
			window.selectStep1FromData(step1Option);
			$(".modal-overlay").fadeIn();
			$(".modal").fadeIn();
			$(".modal-step").hide();
			$(".modal-step[data-step='2']").fadeIn();
			$("body").css("overflow", "hidden");
		} else {
				console.warn(`Step1 옵션을 찾을 수 없습니다: ${step1Option}`);
				
		}

    // 모달 표시 및 Step2부터 열기
		$(".course-modal-overlay").fadeOut();
    $(".modal-overlay").fadeIn();
    $(".modal").fadeIn();
    $(".modal-step").hide();
    $(".modal-step[data-step='2']").fadeIn();

    // 스크롤 막기
    $("body").css("overflow", "hidden");
	});

	$(document).on('keydown', function(event) {
		if (event.key === "Escape") { 
			$(".course-modal-overlay").fadeOut(300, function() {
				$(this).remove();
			});
			$("body").css("overflow", "auto");
		}
	});
  // 모달 닫기 (닫기 버튼 클릭 시만 닫힘)
  $(document).on("click", ".close-course-modal", function () {
    $(".course-modal-overlay").fadeOut(function () {
      $(this).remove();
    });
    $("body").css("overflow", "auto");
  });
	
});
