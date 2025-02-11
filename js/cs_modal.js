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

    // 모달 닫기 (모달 전체 닫기 버튼 및 오버레이 클릭 시)
    $('.modal-overlay').on('click', function(event) {
        if ($(event.target).is('.modal-overlay') || $(event.target).is('.modal-close')) {
            $('.modal-overlay').fadeOut();
            $('.modal').fadeOut();
            $('.agree-txt-modal').fadeOut();

            // 스크롤 다시 활성화
            $('body').css('overflow', 'auto');
        }
    });

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
});