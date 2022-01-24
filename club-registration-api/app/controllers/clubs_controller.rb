class ClubsController < ApplicationController
  before_action :set_club, only: [:show, :update, :destroy]

  # GET /clubs
  def index
    @clubs = Club.all

    render json: @clubs
  end

  # GET /clubs/1
  def show
    render json: @club
  end

  # POST /clubs
  def create
    puts "CLUBBBbbbbbbb" 
    # puts club_params
    @club = Club.new(club_params)
    
    if @club.save
      puts "Saved Correctly  "
      render json: @club, status: :created, location: @club
    else
      puts "ERRO  ORRRR  "
      puts @club.errors.full_messages
      render json: @club.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clubs/1
  def update
    if @club.update(club_params)
      render json: @club
    else
      render json: @club.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clubs/1
  def destroy
    if @club.destroy
      render json: { message: "Club successfully destroyed" }
    else
      render json: { message: "Something went wrong! Errors: #{@club.errors.full_messages}" }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_club
    @club = Club.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def club_params
      params.require(:club).permit(:name, :summary, :description, :date_founded)
    end

  #   if params[:club].is_a? String
  #     params[:club]
  #   else
  #     params.require(:club).permit(:name, :summary, :description, :date_founded)
  #   end
  # end
end

