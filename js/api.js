// ✅ 구글 스프레드시트, 관리자 홈페이지, 카카오톡 알림 통합 코드
// 현재 사용 중인 index.html, cs_modal.js, course_modal.js에 적용 가능
// 📌 api.js를 통한 관리자 API URL 적용

// API 설정 (api.js에서 호출)
const API_BASE_URL = 'http://localhost:3000/api';

// 모달 입력값 수집 함수
function collectStepData() {
    let step1 = $('.modal-step[data-step="1"] .need-btn.selected').text() || "N/A";
    let step2 = $('.modal-step[data-step="2"] .need-btn.selected').text() || "N/A";
    let step3 = $('.modal-step[data-step="3"] .need-btn.selected').text() || "N/A";
    return { step1, step2, step3 };
}

$('.modal').on('click', '.need-btn', function() {
    $(this).siblings('.need-btn').removeClass('selected');
    $(this).addClass('selected');
});

// 상담 신청 데이터 전송 (Google Sheets + Admin API + Kakao)
$('.modal').on('submit', 'form', function(e) {
    e.preventDefault();

    // 전체 유효성 검사 실행
    if (!validateFormFieldsOnSubmit()) {
        return; // 유효성 검사 실패 시 중단
    }
    
    const stepData = collectStepData();
    const formData = {
        name: $('#name').val(),
        phone: $('#phone').val(),
        contactTime: $('#contact-time').val(),
        message: $('#message').val(),
        ...stepData
    };

    // API 호출 (Google Sheets + Admin API + Kakao)
    $.ajax({
        url: `${API_BASE_URL}/consultations`, // 관리자 API URL 적용
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function() {
            alert('상담 신청이 완료되었습니다!');
            closeModal();
        },
        error: function() {
            alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    });

    function closeModal() {
        $('.modal-overlay').fadeOut();
        $('.modal').fadeOut();
        $('.agree-txt-modal').fadeOut();
        $('body').css('overflow', 'auto');
    }
});

// 버튼 선택 시 .selected 클래스 추가 (Step 클릭 시 데이터 수집용)
$('.need-btn').click(function() {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
});

// 상담 신청 API 호출
function submitConsultation(data) {
    return $.ajax({
        url: `${API_BASE_URL}/consultations`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
}

// 상담 목록 불러오기
function fetchConsultations() {
    return $.ajax({
        url: `${API_BASE_URL}/consultations`,
        type: 'GET',
        contentType: 'application/json'
    });
}