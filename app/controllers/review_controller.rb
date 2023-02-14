class ReviewController < ApplicationController
    
    def index
       render json: Review.all
    end

    def create
        review = Review.create!(review_params)
        render json: review
    end

    def show
        render json: Review.find(params[:id])
    end

    private

    def review_params
        params.permit(:reviewer_name, :review_body, :rating, :coffee_type_id)
    end
end