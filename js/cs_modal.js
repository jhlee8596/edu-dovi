$(document).ready(function() {
    // 모달 열기
    $('.consultation-btn').click(function() {
        $('.modal-overlay').fadeIn();
        $('.modal').fadeIn();
        $('.modal-step').hide();
        $('.modal-step[data-step="1"]').show();

        // 스크롤 막기
        $('body').css('overflow', 'hidden');
    });

    $(document).on('keydown', function(event) {
        if (event.key === "Escape") { 
            closeModal();
        }
    });

    // 모달 닫기 공통 함수
    function closeModal() {
        $('.modal-overlay').fadeOut();
        $('.modal').fadeOut();
        $('.agree-txt-modal').fadeOut();
        $('body').css('overflow', 'auto');
        console.log("ESC 키 입력으로 모달이 닫혔습니다.");
    }

    // 약관 모달 열기
    $('.agree_btn').click(function() {
        const targetModal = $(this).next('.agree-txt-modal');
        $(targetModal).fadeIn();

        // 스크롤 막기
        $('.modal').css('overflow', 'hidden');
    });

    // 약관 모달 닫기 및 체크박스 자동 선택
    $('.agree-txt-modal').on('click', '.agree-modal-close, .modal_agree', function() {
        const modal = $(this).closest('.agree-txt-modal');
        modal.fadeOut();
        $('.modal').css('overflow', 'auto');

        // 동의 버튼 클릭 시 체크박스 자동 선택
        if ($(this).hasClass('modal_agree')) {
            modal.prevAll('input[type="checkbox"].checkbox.only').prop('checked', true).trigger('change');
        }

        // 약관 모달 닫힌 후 스크롤 활성화 (모달이 모두 닫혔을 때)
        if ($('.agree-txt-modal:visible').length === 0 && $('.modal:visible').length === 0) {
            $('body').css('overflow', 'auto');
        }
    });

    // 단계별 버튼 클릭 시 다음 단계로 이동
    $('.modal').on('click', '.need-btn', function() {
        const nextStep = $(this).data('next');
        $('.modal-step').hide();
        $(`.modal-step[data-step="${nextStep}"]`).fadeIn();
    });

    // 전체 약관 동의 체크박스
    $('#allcheck').click(function() {
        $('.agree-check input[type="checkbox"]').prop('checked', this.checked);
    });

    // 개별 약관 동의 체크박스 관리
    $('.checkbox.only').change(function() {
        const allChecked = $('.checkbox.only').length === $('.checkbox.only:checked').length;
        $('#allcheck').prop('checked', allChecked);
    });

    // 모달 닫기 버튼 클릭 시 모달 닫기
    $('.modal-close').click(function() {
        $('.modal-overlay').fadeOut();
        $('.modal').fadeOut();

        // 스크롤 다시 활성화
        $('body').css('overflow', 'auto');
    });

    window.selectStep1FromData = function(step1Option) {
        const step1Buttons = $('.modal-step[data-step="1"] .need-btn');
        step1Buttons.removeClass('selected');
        
        const matchedButton = step1Buttons.filter(function() {
            return $(this).text().trim() === step1Option;
        });
        
        if (matchedButton.length) {
            matchedButton.addClass('selected'); // ✅ 선택된 버튼에 .selected 추가
            console.log(`Step1 '${step1Option}' 자동 선택 및 .selected 클래스 추가 완료`);
        } else {
            console.warn(`Step1에 '${step1Option}'과 일치하는 버튼이 없습니다.`);
        }
    };
});

// ✅ 유효성 검사 메시지 추가 함수
function showErrorMessage(element, message) {
    // 기존 에러 메시지 제거
    $(element).next('.error-message').remove();
    // 새로운 에러 메시지 추가
    $(element).after(`<p class="error-message text-red-500 text-sm mt-1">${message}</p>`);
}

// ✅ 입력 필드 공통 유효성 검사
function validateInputField(element, message) {
    if (!$(element).val().trim()) {
        showErrorMessage(element, message);
        return false;
    }
    return true;
}

// ✅ 약관 체크 검사
function validateAgreement() {
    if ($('.checkbox.only:checked').length !== $('.checkbox.only').length) {
        alert('모든 필수 약관에 동의해 주세요.');
        return false;
    }
    return true;
}

// ✅ 포커스 이동 시 유효성 검사 이벤트 추가
$('#phone, #contact-time, #message').on('focus', function () {
    // 이전 필드 검사 (이름 → 연락처, 연락처 → 희망시간 순서 등)
    if ($(this).attr('id') === 'phone') {
        validateInputField('#name', '이름을 입력해 주세요.');
    }
    if ($(this).attr('id') === 'contact-time') {
        validateInputField('#phone', '연락처를 입력해 주세요.');
    }
    if ($(this).attr('id') === 'message') {
        validateInputField('#contact-time', '연락 희망 시간을 입력해 주세요.');
    }
});

// ✅ 포커스 아웃 시 유효성 검사
$('input, textarea').on('blur', function() {
    const fieldId = $(this).attr('id');
    switch (fieldId) {
        case 'name':
            validateInputField(this, '이름을 입력해 주세요.');
            break;
        case 'phone':
            validateInputField(this, '연락처를 입력해 주세요.');
            break;
        case 'contact-time':
            validateInputField(this, '연락 희망 시간을 입력해 주세요.');
            break;
    }
});

// ✅ 상담 신청 시 전체 유효성 검사
function validateFormFieldsOnSubmit() {
    let isValid = true;

    // 입력 필드 검사
    isValid &= validateInputField('#name', '이름을 입력해 주세요.');
    isValid &= validateInputField('#phone', '연락처를 입력해 주세요.');
    isValid &= validateInputField('#contact-time', '연락 희망 시간을 입력해 주세요.');
    isValid &= validateInputField('#message', '전달하고 싶은 내용을 입력해 주세요.');

    // 약관 동의 검사
    if (!validateAgreement()) {
        isValid = false;
    }

    return !!isValid;
}